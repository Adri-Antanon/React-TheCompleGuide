import { ExpenseItem } from "..";

import "./styles.css";

export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          key={expense.id}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
