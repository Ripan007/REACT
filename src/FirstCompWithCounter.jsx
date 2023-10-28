import React from "react";
import { UseCounter } from "./UseCounter";

export const FirstCompWithCounter = () => {
  const { count, increment, decrement, reset } = UseCounter(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
