import { createSlice } from "@reduxjs/toolkit";

const unitsSlice = createSlice({
  name: "units",
  initialState: {
    units: null,
  },
  reducers: {
    setUnits(state, action) {
      /* console.log(state);
      console.log(action); */
      state.units = action.payload;
    },
  },
});

export const { setUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
