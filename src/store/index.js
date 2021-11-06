import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREASE = "INCREASE";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case INCREASE:
      return { counter: state.counter + action.amount };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
