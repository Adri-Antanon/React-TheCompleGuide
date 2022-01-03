export const SET = "SET";
export const ADD = "ADD";
export const DELETE = "DELETE";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case SET:
      return action.ingredients;
    case ADD:
      return [...currentIngredients, action.ingredient];
    case DELETE:
      return currentIngredients.filter((ing) => ing.id !== action.id);

    default:
      throw new Error("Should not get there!");
  }
};

export default ingredientReducer;
