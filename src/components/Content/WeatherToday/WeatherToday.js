import React from "react";
import Details from "./Details";
import moment from "moment";
import { useSelector } from "react-redux";

const WeatherToday = ({ weatherData }) => {
  const measurement = useSelector((state) => state.measurement.measurement);

  return (
    <div className="container_vertical weather-today">
      <div className="container_horizontal weather-today__temp">
        <h3 className="headline temp__value">
          {Math.round(weatherData.main.temp)}
        </h3>
        <div className="container_horizontal temp__measurement">
          <span className="headline measurement__degree">o</span>
          <span className="headline measurement__symbol">
            {measurement ? "F" : "C"}
          </span>
        </div>
      </div>
      <div className="container_vertical weather-today__date">
        <h3 className="headline date__full-date">
          {moment().format("Do MMM YY")}
        </h3>
        <div className="container_horizontal date__time">
          <span className="headline day">{moment().format("dddd")}</span>
          <span className="headline time">{moment().format("h:mm A")}</span>
        </div>
      </div>
      <Details
        wind={weatherData.wind.speed}
        humidity={weatherData.main.humidity}
        pressure={weatherData.main.pressure}
        measurement={measurement}
      />
    </div>
  );
};

export default WeatherToday;
