import { useState } from "react";

import { ExpenseItem, ExpensesFilter } from "..";
import { Card } from "../../UI";

import "./styles.css";

export const ExpensesContainer = ({ expenses }) => {
  const [filteredYear, setfilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
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
