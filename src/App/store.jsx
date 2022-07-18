import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feathers/counter/counterSlice";
import postReducer from "../feathers/posts/postSlice";

// createStore alternative configStore
const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export default store;
