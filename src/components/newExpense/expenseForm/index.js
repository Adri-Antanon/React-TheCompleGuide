import { useState } from "react";

import "./styles.css";

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (ev) => {
    ev.preventDefault();
    setEnteredTitle(ev.target.value);
  };

  const amountChangeHandler = (ev) => {
    ev.preventDefault();
    setEnteredAmount(ev.target.value);
  };

  const dateChangeHandler = (ev) => {
    ev.preventDefault();
    setEnteredDate(ev.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
