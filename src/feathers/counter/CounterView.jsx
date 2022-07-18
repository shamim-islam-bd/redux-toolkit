import React from "react";
import { useSelector } from "react-redux";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>CounterView</h1>

      <h3>Count : {count}</h3>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default CounterView;
