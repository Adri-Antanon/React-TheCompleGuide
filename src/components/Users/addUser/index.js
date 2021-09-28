import { useRef } from "react";
import { Card, Button } from "../../UI";

import classes from "./styles.module.css";

export const AddUser = (props) => {
  const usernameInput = useRef();
  const ageInput = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInput.current.value;
    const enteredAge = ageInput.current.value;

    console.log(enteredUsername, enteredAge);
  };

  return (
    <Card classname={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" ref={usernameInput} />
        <label htmlFor="age">Age (Years)</label>
        <input type="text" name="age" id="age" ref={ageInput} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
