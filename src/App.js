import { ExpensesContainer } from "./components/Expenses";
import { NewExpense } from "./components/newExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: Math.random() * 1000,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: Math.random() * 1000,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
    {
      id: "e3",
      title: "Xiaomi Redmi 39",
      amount: Math.random() * 1000,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app.js", expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
}

export default App;
