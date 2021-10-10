import { forwardRef } from "react";

import classes from "./styles.module.css";

export const Input = forwardRef(({ label, input }, ref) => {
  const { id } = input;
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});
