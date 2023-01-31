/* import Rainy from './../../../images/Rainy.svg'; */
import React from "react";

const WeatherImage = ({ icon }) => {
  return (
    <img
      src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
      id="weather-image"
      alt="Rainy"
    />
  );
};

export default WeatherImage;