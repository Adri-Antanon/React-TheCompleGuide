// import { useState } from "react";

// import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  // Esto es sin aplicar un Context, esta lógica está pasada al contexto para que se pueda acceder de manera global
  // const [todos, setTodos] = useState<TodosItem[]>([]);

  // const addTodoHandler = (text: string) => {
  //   const newTodo = new Todo(text);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (id: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== id);
  //   });
  // };
  return (
    <div>
      <NewTodo /* onAddTodo={addTodoHandler} */ />
      <Todos /* onRemove={removeTodoHandler} items={todos}  */ />
    </div>
  );
}

export default App;
