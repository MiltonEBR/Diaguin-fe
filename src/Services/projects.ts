import axios, { AxiosResponse } from 'axios';
import { Project } from '../Types';

const baseUrl = 'http://localhost:3001/projects';

const getAll = (): Promise<Project[]> => {
  return axios.get(baseUrl).then((res) => res.data);
};

const create = (newObject: Omit<Project, 'id'>): Promise<Project> => {
  return axios
    .post<Omit<Project, 'id'>, AxiosResponse<Project>>(baseUrl, newObject)
    .then((res) => res.data);
};

const update = (id: string, newObject: Project): Promise<Project> => {
  return axios
    .put<Project>(`${baseUrl}/${id}`, newObject)
    .then((res) => res.data);
};

export default {
  getAll,
  create,
  update,
};
