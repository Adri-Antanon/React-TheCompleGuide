import React, { useReducer, useCallback, useMemo } from "react";

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

import useHttp from "../../hooks/httpHook";
import { useEffect } from "react";

const Ingredients = (props) => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const {
    data,
    error,
    isLoading,
    sendRequest,
    requestExtra,
    requestIdentifier,
  } = useHttp();
  // Manejo del estado con useReducer, es un poco más complejo que useState pero sirve para manejar varios estados a la vez
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {
  //   loading: false,
  //   error: null,
  // });

  // Manejo del estado con useState
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    if (!isLoading && !error && requestIdentifier === "REMOVE_INGREDIENT") {
      dispatchIngredients({ type: DELETE, id: requestExtra });
    } else if (!isLoading && !error && requestIdentifier === "ADD_INGREDIENT") {
      dispatchIngredients({
        type: ADD,
        ingredient: { id: data.name, ...requestExtra },
      });
    }
  }, [data, requestExtra, requestIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: SET, ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(async (ingredient) => {
    const url = BASE_URL + "/ingredients.json";
    const method = "POST";
    await sendRequest(
      url,
      method,
      JSON.stringify(ingredient),
      ingredient,
      "ADD_INGREDIENT"
    );
  }, []);

  const removeIngredientHandler = useCallback(
    async (ingredientID) => {
      const url = BASE_URL + `/ingredients/${ingredientID}.json`;
      const method = "DELETE";

      await sendRequest(url, method, null, ingredientID, "REMOVE_INGREDIENT");
    },
    [sendRequest]
  );

  const clearError = useCallback(() => {
    // dispatchHttp({ type: CLEAR });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
