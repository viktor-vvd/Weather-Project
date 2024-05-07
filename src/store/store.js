import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./unitsSlice";
import modalReducer from "./modalSlice";
import locationReducer from "./locationSlice";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    modal: modalReducer,
    location: locationReducer,
    data: dataReducer,
  },
});
