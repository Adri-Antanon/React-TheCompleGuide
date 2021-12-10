type TodosItem = { text: string; id: string };

type TodosProps = { items: TodosItem[]; onRemove: (id: string) => void };

type RemoveTodo = { text: string; id: string; onRemove: (id: string) => void };

type NweTodoProps = {
  onAddTodo: (text: string) => void;
};
