import axios from 'axios';
import { addDays, startOfToday } from 'date-fns';
import { getDay } from 'date-fns/esm';
import { GoalRawData } from '../Types';

const baseUrl = 'http://localhost:3001/goals';

const getById = async (id: string): Promise<GoalRawData> => {
  const rawGoals = await axios
    .get<GoalRawData>(`${baseUrl}/${id}`)
    .then((res) => res.data);

  const todayDate = startOfToday();
  const todayDay = getDay(todayDate);

  const formatDates = rawGoals.repeat
    ? rawGoals.dates.map((day) =>
        addDays(
          todayDate,
          todayDay <= Number(day)
            ? Number(day) - todayDay
            : 6 - todayDay + Number(day),
        ).toJSON(),
      )
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
