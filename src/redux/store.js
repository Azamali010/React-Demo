// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter"; // Importing the reducer from the counter slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Assign the reducer to a key in the store
  },
});

export default store;  // Default export of the store
