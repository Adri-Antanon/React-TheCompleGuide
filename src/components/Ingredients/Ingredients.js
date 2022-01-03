import React, { useReducer, useState, useCallback } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import { BASE_URL } from "../../config/constants";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);

    default:
      throw new Error("Should not get there!");
  }
};

const Ingredients = (props) => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  // const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = async (ingredient) => {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL + "/ingredients.json", {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      });
      const ingredientId = await response.json();
      setIsLoading(false);

      dispatch({
        type: "ADD",
        ingredient: { id: ingredientId.name, ...ingredient },
      });
    } catch (error) {
      setError("Something went wrong!");
      setIsLoading(false);
    }
  };

  const removeIngredientHandler = async (ingredientID) => {
    try {
      setIsLoading(true);
      await fetch(BASE_URL + `/ingredients/${ingredientID}.json`, {
        method: "DELETE",
      });
      setIsLoading(false);
      dispatch({ type: "DELETE", id: ingredientID });
    } catch (error) {
      setError("Something went wrong!");
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

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
