import { useState, useEffect } from "react";

const useCounter = (type) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (type) {
        case "+":
          setCounter((prevCounter) => prevCounter + 1);
          break;

        default:
          setCounter((prevCounter) => prevCounter - 1);
          break;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);
  return counter;
};

export default useCounter;
