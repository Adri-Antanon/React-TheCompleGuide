import { Input } from "../../UI";
import classes from "./styles.module.css";

export const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add </button>
    </form>
  );
};
