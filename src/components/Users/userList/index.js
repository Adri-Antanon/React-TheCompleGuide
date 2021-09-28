import { Card } from "../../UI";

import classes from "./styles.module.css";

export const UserList = ({ users }) => {
  return (
    <Card classname={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
