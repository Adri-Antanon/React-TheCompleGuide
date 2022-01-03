import React, { useState, useCallback } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import { BASE_URL } from "../../config/constants";

const Ingredients = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
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

      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: ingredientId.name, ...ingredient },
      ]);
    } catch (error) {
      setError("Something went wrong!");
      setIsLoading(false);
    }
  };

  const removeIngredientHandler = async (ingredientID) => {
    try {
      setIsLoading(true);
      await fetch(BASE_URL + `/ingredients/${ingredientID}.jso`, {
        method: "DELETE",
      });
      setIsLoading(false);
      setIngredients((prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient.id !== ingredientID)
      );
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
