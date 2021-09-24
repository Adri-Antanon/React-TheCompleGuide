import { Card, ExpenseItem } from "..";

import "./styles.css";

export const ExpensesContainer = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount}
          key={expense.id}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
