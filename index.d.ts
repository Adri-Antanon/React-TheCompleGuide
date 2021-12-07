type TodosItem = { text: string };

type TodosProps = { items: TodosItem[] };

type NweTodoProps = {
  onAddTodo: (text: string) => void;
};
