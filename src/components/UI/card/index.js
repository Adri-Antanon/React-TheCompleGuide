import classes from "./styles.module.css";

export const Card = ({ children, classname }) => {
  return <div className={`${classes.card} ${classname}`}>{children}</div>;
};

export default Card;
