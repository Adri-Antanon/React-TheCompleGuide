import { useState } from "react";
import { ExpensesContainer } from "./components/Expenses";
import { NewExpense } from "./components/newExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: (Math.random() * 1000).toFixed(2),
    date: new Date(2021, Math.random() * 12, Math.random() * 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: (Math.random() * 1000).toFixed(2),
    date: new Date(2021, Math.random() * 12, Math.random() * 28),
  },
  {
    id: "e3",
    title: "Xiaomi Redmi 39",
    amount: (Math.random() * 1000).toFixed(2),
    date: new Date(2021, Math.random() * 12, Math.random() * 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
}

export default App;
