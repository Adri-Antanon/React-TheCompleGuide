export const USER_INPUT = "USER_INPUT";
export const INPUT_BLUR = "INPUT_BLUR";

export const emailReducer = (state, action) => {
  switch (action.type) {
    case USER_INPUT:
      return { value: action.val, isValid: action.val.includes("@") };
    case INPUT_BLUR:
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: false };
  }
};

export const passwordReducer = (state, action) => {
  switch (action.type) {
    case USER_INPUT:
      return { value: action.val, isValid: action.val.trim() > 6 };
    case INPUT_BLUR:
      return { value: state.value, isValid: state.value.trim() > 6 };

    default:
      return { value: "", isValid: false };
  }
};
