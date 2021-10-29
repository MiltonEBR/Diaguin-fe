export interface CardProps {
  ttl: string;
  description: string;
  onClick?: (txt: string) => void;
  className?: string;
}

export type CardsList = Pick<CardProps, 'ttl' | 'description'>[];

export interface Goal {
  id: string;
  description: string;
  repeat: boolean;
  finished: boolean;
  dates: Array<string>;
  nextDate: string;
}

export interface NewGoal {
  description: string;
  repeat: boolean;
  dates: string[];
}

export type GoalRawData = Omit<Goal, 'nextDate'>;

export interface Project {
  id: string;
  name: string;
  goalsId: Array<string>;
  goalCount: number;
}

export interface StoreData {
  projects: Project[];
  goals: Goal[];
  createProject: (a: string) => Promise<void>;
  createGoal: (goal: NewGoal, projectId: string) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  deleteGoal: (id: string) => Promise<void>;
  updateGoal: (id: string, goal: NewGoal) => Promise<void>;
}
