import { createSlice } from "@reduxjs/toolkit";

const unitsSlice = createSlice({
  name: "units",
  initialState: {
    units: null,
  },
  reducers: {
    changeUnits(state, action) {
      /* console.log(state);
      console.log(action); */
      state.units = action.payload;
    },
  },
});

export const { changeUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
