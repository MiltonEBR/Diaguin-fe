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
}

export interface Project {
  id: string;
  name: string;
  goalsId: Array<string>;
  goalCount: number;
  finishedGoals: number;
}
