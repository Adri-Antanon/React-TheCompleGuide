import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
const Todos: React.FC<TodosProps> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item: TodosItem) => (
        <TodoItem key={item.text} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
