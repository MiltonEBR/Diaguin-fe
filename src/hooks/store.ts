import { useState, useEffect } from 'react';
import { Goal, Project, StoreData } from '../Types';
import projectsService from '../Services/projects';
import goalsServices from '../Services/goals';
import { getNextDate } from '../Utils/dates';

function Store(): StoreData {
  const [projects, setProjects] = useState<Project[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const getProjects = async (): Promise<void> => {
      const res = await projectsService.getAll();
      setProjects(res);
    };
    getProjects();
  }, []);

  useEffect(() => {
    if (!projects) return;
    const getGoals = (): void => {
      for (let i = 0; i < projects.length; i += 1) {
        projects[i].goalsId.forEach(async (goalId) => {
          const goal = await goalsServices.getById(goalId);
          setGoals((prev) => [
            ...prev,
            { ...goal, nextDate: getNextDate(goal.dates) },
          ]);
        });
      }
    };
    getGoals();
  }, [projects]);

  const createProject = async (name: string): Promise<void> => {
    const newProj = await projectsService.create(name);
    setProjects((prev) => [...prev, newProj]);
  };

  return { projects, goals, createProject };
}

export default Store;
