import classes from "./styles.module.css";

export const Input = ({ label, input }) => {
  const { id } = input;
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input {...input} />
    </div>
  );
};
