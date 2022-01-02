import React, { useState, useCallback } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import { BASE_URL } from "../../config/constants";

const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = async (ingredient) => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" },
    });
    const ingredientId = await response.json();
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: ingredientId.name, ...ingredient },
    ]);
  };

  const removeIngredientHandler = (ingredientID) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientID)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
