import { Card, Button } from "../../UI";

import classes from "./styles.module.css";

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card classname={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="text" name="age" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
