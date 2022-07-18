import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feathers/counter/counterSlice";

// createStore alternative configStore
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
