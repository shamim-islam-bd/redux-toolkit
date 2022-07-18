import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByNum, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  //   console.log(count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>CounterView</h1>

      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(incrementByNum(10));
        }}
      >
        incrementByNum
      </button>
    </div>
  );
};

export default CounterView;
