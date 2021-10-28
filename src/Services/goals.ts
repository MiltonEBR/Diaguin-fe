import axios, { AxiosResponse } from 'axios';
import type { Goal, GoalRawData, NewGoal } from '../Types';
import { dayNameToNumber, dayToNextDates } from '../Utils/dates';

const baseUrl = 'http://localhost:3001/goals';

const formatDates = (goal: Goal | GoalRawData): string[] => {
  return goal.repeat ? dayToNextDates(goal.dates) : goal.dates;
};

const getById = async (id: string): Promise<GoalRawData> => {
  const rawGoals = await axios
    .get<GoalRawData>(`${baseUrl}/${id}`)
    .then((res) => res.data);

  const formatedDates = formatDates(rawGoals);

  return { ...rawGoals, dates: formatedDates };
};

const create = async (newObject: NewGoal): Promise<Goal> => {
  const newGoal = { ...newObject, finished: false };
  if (newObject.repeat)
    newGoal.dates = newGoal.dates.map((d) => dayNameToNumber(d));

  const createdGoal = await axios
    .post<Omit<GoalRawData, 'id'>, AxiosResponse<Goal>>(baseUrl, newGoal)
    .then((res) => res.data);

  const formatedDates = formatDates(createdGoal);

  return { ...createdGoal, dates: formatedDates };
};

const remove = async (id: string): Promise<void> => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = async (id: string, goal: NewGoal): Promise<Goal> => {
  const formatedGoal = { ...goal, finished: false };

  if (goal.repeat)
    formatedGoal.dates = formatedGoal.dates.map((d) => dayNameToNumber(d));

  const updatedGoal = await axios
    .put<Omit<GoalRawData, 'id'>, AxiosResponse<Goal>>(
      `${baseUrl}/${id}`,
      formatedGoal,
    )
    .then((res) => res.data);

  const formatedDates = formatDates(updatedGoal);

  return { ...updatedGoal, dates: formatedDates };
};

export default {
  getById,
  create,
  remove,
  update,
};
