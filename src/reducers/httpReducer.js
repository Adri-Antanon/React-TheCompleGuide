export const SEND = "SEND";
export const RESPONSE = "RESPONSE";
export const ERROR = "ERROR";
export const CLEAR = "CLEAR";

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case SEND:
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case RESPONSE:
      return {
        ...currentHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case ERROR:
      return { loading: false, error: action.error };
    case CLEAR:
      return { ...currentHttpState, error: null };

    default:
      throw new Error("Should not be reached!");
  }
};

export default httpReducer;
