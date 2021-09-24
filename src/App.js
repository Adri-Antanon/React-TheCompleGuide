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
      title: "Car Insurance",
      amount: Math.random() * 1000,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: Math.random() * 1000,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
  ];
  return (
    <div>
      <NewExpense />
      <ExpensesContainer expenses={expenses} />
    </div>
  );
}

export default App;
