import axios from 'axios';
import { GoalRawData } from '../Types';
import { dayToNextDates } from '../Utils/dates';

const baseUrl = 'http://localhost:3001/goals';

const getById = async (id: string): Promise<GoalRawData> => {
  const rawGoals = await axios
    .get<GoalRawData>(`${baseUrl}/${id}`)
    .then((res) => res.data);

  const formatDates = rawGoals.repeat
    ? dayToNextDates(rawGoals.dates)
    : rawGoals.dates;

  return { ...rawGoals, dates: formatDates };
};

// const create = (newObject: Omit<Project, 'id'>): Promise<Project> => {
//   return axios
//     .post<Omit<Project, 'id'>, AxiosResponse<Project>>(baseUrl, newObject)
//     .then((res) => res.data);
// };

// const update = (id: string, newObject: Project): Promise<Project> => {
//   return axios
//     .put<Project>(`${baseUrl}/${id}`, newObject)
//     .then((res) => res.data);
// };

export default {
  getById,
  // create,
  // update,
};
