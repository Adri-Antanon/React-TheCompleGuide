import React from "react";
import { useState } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import { useEffect } from "react";

const BASE_URL =
  "https://reactthecompleteguide-72d27-default-rtdb.firebaseio.com/ingredients.json";

const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch(BASE_URL);
      const responseData = await response.json();
      const loadedIngredients = [];
      for (const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount,
        });
      }

      setIngredients(loadedIngredients);
    };

    loadIngredients();
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
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
