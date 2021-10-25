import { useState, useEffect } from 'react';
import { Goal, NewGoal, Project, StoreData } from '../Types';
import projectsService from '../Services/projects';
import goalsServices from '../Services/goals';
import { getNextDate } from '../Utils/dates';

// NOTE: It appears like the delete methods do not work properly,
// this is a JSON-SERVER problem due to cascade deletion

function Store(): StoreData {
  const [projects, setProjects] = useState<Project[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const getProjects = async (): Promise<void> => {
      const res = await projectsService.getAll();
      setProjects(res);

      for (let i = 0; i < res.length; i += 1) {
        res[i].goalsId.forEach(async (goalId) => {
          const goal = await goalsServices.getById(goalId);
          setGoals((prev) => [
            ...prev,
            { ...goal, nextDate: getNextDate(goal.dates) },
          ]);
        });
      }
    };
    getProjects();
  }, []);

  const createProject = async (name: string): Promise<void> => {
    const newProj = await projectsService.create(name);
    setProjects((prev) => [...prev, newProj]);
  };

  const createGoal = async (
    { description, dates, repeat }: NewGoal,
    projectId: string,
  ): Promise<void> => {
    const newGoal = await goalsServices.create({ description, dates, repeat });
    setGoals((prev) => [
      ...prev,
      { ...newGoal, nextDate: getNextDate(newGoal.dates) },
    ]);

    //  Will probably need a rework once the backend is done
    const currProject = projects.find((p) => p.id === projectId);
    if (currProject) {
      // currProject.goalsId.push(newGoal.id);
      if (!newGoal.repeat) currProject.goalCount += 1;
      const updatedProject = await projectsService.update(currProject.id, {
        ...currProject,
        goalsId: [...currProject.goalsId, newGoal.id],
      });
      setProjects((prev) => {
        const updated = prev.filter((p) => p.id !== updatedProject.id);
        return [...updated, updatedProject];
      });
    }
  };

  const deleteProject = async (id: string): Promise<void> => {
    await projectsService.remove(id);
    const deleted = { ...projects.find((p) => p.id === id) };
    setProjects((prev) => prev.filter((p) => p.id !== id));
    // Probably has to be changed when backend is done
    if (deleted.goalsId) {
      deleted.goalsId.forEach(async (goalId) => {
        await goalsServices.remove(goalId);
        setGoals((prev) => prev.filter((goal) => goal.id !== goalId));
      });
    }
  };

  const deleteGoal = async (id: string): Promise<void> => {
    await goalsServices.remove(id);
    const deletedGoal = goals.find((g) => g.id === id);
    setGoals((prev) => prev.filter((g) => g.id !== id));
    // Probably has to be changed when backend is done
    const newProjects = [...projects];
    const proj = newProjects.find((p) => p.goalsId.includes(id));
    if (proj && deletedGoal) {
      proj.goalsId = proj.goalsId.filter((g) => g !== id);
      if (!deletedGoal.repeat) proj.goalCount -= 1;
      newProjects.map((p) => (p.id === proj.id ? proj : p));
      setProjects([...newProjects]);
    }
  };

  return {
    projects,
    goals,
    createProject,
    createGoal,
    deleteProject,
    deleteGoal,
  };
}

export default Store;
