import TodoItem from "./TodoItem";
const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item: TodosItem) => (
        <TodoItem key={item.text} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
