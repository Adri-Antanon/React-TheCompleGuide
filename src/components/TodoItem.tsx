import classes from "./TodoItem.module.css";

const TodoItem: React.FC<RemoveTodo> = ({ text, onRemove, id }) => {
  return (
    <li
      onClick={(event) => {
        event.preventDefault();
        onRemove(id);
      }}
      className={classes.item}
    >
      {text}
    </li>
  );
};

export default TodoItem;
