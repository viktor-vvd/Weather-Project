import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: {
      name: "Lutsk",
      state: "Volyn Oblast",
      country: "UA"
    },
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
