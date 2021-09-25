import { useState } from "react";

import { ExpenseItem, ExpensesFilter } from "..";
import { Card } from "../../UI";

import "./styles.css";

export const ExpensesContainer = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYear={handleSelectYear}
      />
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
