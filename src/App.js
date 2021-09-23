import { ExpenseItem } from "./components";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 298.21,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 298.21,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 298.21,
      date: new Date(2021, Math.random() * 12, Math.random() * 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          key={expense.id}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
