import { createSlice } from "@reduxjs/toolkit";

const measurementSlice = createSlice({
  name: "measurement",
  initialState: {
    measurement: false,
  },
  reducers: {
    changeMeasurement(state, action) {
      /* console.log(state);
      console.log(action); */
      state.measurement = !action.payload.measurement;
    },
  },
});

export const { changeMeasurement } = measurementSlice.actions;

export default measurementSlice.reducer;
