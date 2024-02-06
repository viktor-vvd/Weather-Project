import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./unitsSlice";
import modalReducer from "./modalSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    modal: modalReducer,
    location: locationReducer,
  },
});
