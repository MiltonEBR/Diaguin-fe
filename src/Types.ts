export interface CardProps {
  ttl: string;
  description: string;
  onClick?: (txt: string) => void;
  className?: string;
}

export type CardsList = Pick<CardProps, 'ttl' | 'description'>[];

export interface Goal {
  date?: string;
  name: string;
  finished: boolean;
}
