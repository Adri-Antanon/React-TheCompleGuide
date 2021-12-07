import classes from "./TodoItem.module.css";

const TodoItem: React.FC<TodosItem> = ({ text }) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
