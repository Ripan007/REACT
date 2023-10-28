import React from "react";
import { UseCounter } from "./UseCounter";

export const SecondCompWithCounter = () => {
  const { count, increment, decrement, reset } = UseCounter(10);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => increment(10)}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
