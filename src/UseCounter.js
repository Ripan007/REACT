import { useState } from "react";

export const UseCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = (val) => {
    setCount(count + val);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
};
