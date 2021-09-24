import { useState } from "react";

import { ExpenseDate } from "..";
import { Card } from "../../UI";

import "./styles.css";

export const ExpenseItem = ({ date, title, amount }) => {
  const [customTitle, setCustomTitle] = useState(title);
  const onClickHandler = () => {
    setCustomTitle("Updated!");
    console.log(customTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{customTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
};
