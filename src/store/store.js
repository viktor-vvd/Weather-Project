import { configureStore } from "@reduxjs/toolkit";
import measurementReducer from "./measurementSlice";
import modalReducer from "./modalSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    measurement: measurementReducer,
    modal: modalReducer,
    location: locationReducer,
  },
});
