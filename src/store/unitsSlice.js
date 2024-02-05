import { createSlice } from "@reduxjs/toolkit";

const unitsSlice = createSlice({
  name: "units",
  initialState: {
    units: false,
  },
  reducers: {
    changeUnits(state, action) {
      /* console.log(state);
      console.log(action); */
      state.units = !action.payload.units;
    },
  },
});

export const { changeUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
