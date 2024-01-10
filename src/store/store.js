import { configureStore } from "@reduxjs/toolkit";
import measurementReducer from "./measurementSlice";

export const store = configureStore({
  reducer: {
    measurement: measurementReducer,
  },
});
