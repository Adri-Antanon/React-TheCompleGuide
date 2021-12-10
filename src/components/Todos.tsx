import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
const Todos: React.FC<TodosProps> = ({ items, onRemove }) => {
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
