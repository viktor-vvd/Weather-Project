import React from "react";
import Switcher from "../common/Switcher";
import WeatherToday from "./WeatherToday/WeatherToday";
import Forecast from "./Forecast";

const Content = ({ weatherData, forecastData }) => {
  return (
    <section className="container_outer container_vertical content">
      <div className="container_horizontal content_header">
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            weatherData.data.weather[0].icon +
            "@2x.png"
          }
          className="icon_actual"
          width="100px"
          height="100px"
          alt="Actual weather"
        />
        <Switcher />
      </div>
      <WeatherToday weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </section>
  );
};

export default Content;
