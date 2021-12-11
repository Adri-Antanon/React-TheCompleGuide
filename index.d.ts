type TodosItem = { text: string; id: string };

type TodosProps = { items: TodosItem[]; onRemove: (id: string) => void };

type RemoveTodo = { text: string; id: string; onRemove: (id: string) => void };

type TodosContext = {
  items: TodosItem[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};
