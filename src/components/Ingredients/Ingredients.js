import React, { useReducer, useCallback } from "react";

import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import { BASE_URL } from "../../config/constants";

import ingredientReducer, {
  ADD,
  DELETE,
  SET,
} from "../../reducers/ingredientsReducer";

import httpReducer, {
  CLEAR,
  ERROR,
  RESPONSE,
  SEND,
} from "../../reducers/httpReducer";

const Ingredients = (props) => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: SET, ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = async (ingredient) => {
    try {
      dispatchHttp({ type: SEND });
      const response = await fetch(BASE_URL + "/ingredients.json", {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      });
      const ingredientId = await response.json();
      dispatchHttp({ type: RESPONSE });

      dispatchIngredients({
        type: ADD,
        ingredient: { id: ingredientId.name, ...ingredient },
      });
    } catch (error) {
      dispatchHttp({ type: ERROR, error: "Something went wrong!" });
    }
  };

  const removeIngredientHandler = async (ingredientID) => {
    try {
      // setIsLoading(true);
      dispatchHttp({ type: SEND });
      await fetch(BASE_URL + `/ingredients/${ingredientID}.json`, {
        method: "DELETE",
      });
      // setIsLoading(false);
      dispatchHttp({ type: RESPONSE });

      dispatchIngredients({ type: DELETE, id: ingredientID });
    } catch (error) {
      // setError("Something went wrong!");
      // setIsLoading(false);
      dispatchHttp({ type: ERROR, error: "Something went wrong!" });
    }
  };

  const clearError = () => {
    dispatchHttp({ type: CLEAR });
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
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
