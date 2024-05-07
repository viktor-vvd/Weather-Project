import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    weatherData: null,
    forecastData: null,
    airData: null,
  },
  reducers: {
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    setForecastData(state, action) {
      state.forecastData = action.payload;
    },
    setAirData(state, action) {
      state.airData = action.payload;
    },
  },
});

export const { setWeatherData, setForecastData, setAirData } = dataSlice.actions;

export default dataSlice.reducer;
