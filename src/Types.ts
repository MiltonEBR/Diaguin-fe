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
  nextDate: string | null;
}

export type GoalRawData = Omit<Goal, 'nextDate'>;

export interface Project {
  id: string;
  name: string;
  goalsId: Array<string>;
  goalCount: number;
  finishedGoals: number;
}

export interface StoreData {
  projects: Project[];
  goals: Goal[];
}
