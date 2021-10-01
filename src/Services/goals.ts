import axios from 'axios';
import { Goal } from '../Types';

const baseUrl = 'http://localhost:3001/goals';

const getById = (id: string): Promise<Goal> => {
  return axios.get(`${baseUrl}/${id}`).then((res) => res.data);
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
