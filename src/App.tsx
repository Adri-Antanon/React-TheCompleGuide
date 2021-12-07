import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos
        items={[
          { title: "Learn React", id: "t1" },
          { title: "Learn TS", id: "t2" },
        ]}
      />
    </div>
  );
}

export default App;
