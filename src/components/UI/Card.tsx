import { ReactNode } from 'react';
import classes from '../../assets/css/UI/Card.module.css';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
