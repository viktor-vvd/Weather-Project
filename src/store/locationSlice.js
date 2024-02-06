import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: null,
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;

export default locationSlice.reducer;
