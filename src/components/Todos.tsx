const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item: TodosItem) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
