import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: {
        "name": "Lutsk",
        "lat": 50.7450733,
        "lon": 25.320078,
        "country": "UA",
        "state": "Volyn Oblast"
    },
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;

export default locationSlice.reducer;
