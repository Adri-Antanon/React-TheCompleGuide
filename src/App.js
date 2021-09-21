import { ExpenseItem } from "./components";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem title="Expense Item" date="21 SEP, 2021" amount="17.99" />
    </div>
  );
}

export default App;
