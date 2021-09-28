import classes from "./styles.module.css";

export const Button = ({ type = "button", onClick, children }) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
