import { useState } from "react";
import { ExpenseForm } from "./expenseForm";

import "./styles.css";

export const NewExpense = ({ onAddExpense }) => {
  const [isVisible, setIsVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isVisible && (
        <button onClick={() => setIsVisible(true)}>Add new Expense</button>
      )}
      {isVisible && (
        <ExpenseForm
          onCancel={() => setIsVisible(false)}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
