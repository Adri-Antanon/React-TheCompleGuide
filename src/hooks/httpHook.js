import { useReducer, useCallback } from "react";

import httpReducer, {
  CLEAR,
  RESPONSE,
  SEND,
  ERROR,
} from "../reducers/httpReducer";

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null,
  });

  const sendRequest = useCallback(
    async (url, method, body, requestExtra, requestIdentifier) => {
      try {
        dispatchHttp({ type: SEND, identifier: requestIdentifier });
        const response = await fetch(url, {
          method,
          body,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData = await response.json();

        dispatchHttp({
          type: RESPONSE,
          responseData: responseData,
          extra: requestExtra,
        });
      } catch (error) {
        dispatchHttp({ type: ERROR, error: "Something went wrong!" });
      }
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    requestExtra: httpState.extra,
    requestIdentifier: httpState.identifier,
  };
};

export default useHttp;
