import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const ADD = "ADD";
const REMOVE = "REMOVE";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE:
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ADD, item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: REMOVE, id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
