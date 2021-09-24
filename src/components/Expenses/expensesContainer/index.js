import { ExpenseItem } from "..";
import { Card } from "../../UI";
import "./styles.css";

export const ExpensesContainer = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          amount={expense.amount.toFixed(2)}
          key={expense.id}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
