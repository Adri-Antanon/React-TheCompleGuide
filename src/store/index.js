import { createStore } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREASE = "INCREASE";
export const TOGGLE = "TOGGLE";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case DECREMENT:
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case TOGGLE:
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
