import { useState } from "react";

import { ExpenseItem, ExpensesFilter } from "..";
import { Card } from "../../UI";

import "./styles.css";

export const ExpensesContainer = ({ expenses }) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
