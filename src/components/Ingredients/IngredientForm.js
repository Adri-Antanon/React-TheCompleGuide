import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo(({ onAddIngredient }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  const TitleChangeHandler = (event) => {
    event.preventDefault();
    const newTitle = event.target.value;

    setEnteredTitle(newTitle);
  };

  const AmountChangeHandler = (event) => {
    event.preventDefault();
    const newAmount = event.target.value;

    setEnteredAmount(newAmount);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={TitleChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
