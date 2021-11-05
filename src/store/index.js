import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return { state: state.counter + 1 };
    case DECREMENT:
      return { state: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
