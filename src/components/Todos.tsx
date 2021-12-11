import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const { items, removeTodo: onRemove } = todosCtx;

  return (
    <ul className={classes.todos}>
      {items.map((item: TodosItem) => (
        <TodoItem
          id={item.id}
          onRemove={onRemove}
          key={item.text}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
