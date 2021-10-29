import axios, { AxiosResponse } from 'axios';
import type { Project } from '../Types';

const baseUrl = 'http://localhost:3001/projects';

const getAll = (): Promise<Project[]> => {
  return axios.get(baseUrl).then((res) => res.data);
};

const create = async (newProjectName: string): Promise<Project> => {
  const dummyCreation = {
    // Should be changed to only send the name when backend works
    name: newProjectName,
    goalsId: [],
    goalCount: 0,
  };

  return axios
    .post<Omit<Project, 'id'>, AxiosResponse<Project>>(baseUrl, dummyCreation)
    .then((res) => res.data);
};

const update = (id: string, newObject: Project): Promise<Project> => {
  return axios
    .put<Project>(`${baseUrl}/${id}`, newObject)
    .then((res) => res.data);
};

const remove = (id: string): Promise<void> => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  create,
  update,
  remove,
};
