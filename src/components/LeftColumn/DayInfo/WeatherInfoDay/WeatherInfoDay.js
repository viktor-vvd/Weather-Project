import React from "react";
import Temperature from "./Temperature";
import Details from "./Details";
import moment from "moment";

const WeatherInfoDay = ({ weatherData, measurement }) => {
  return (
    <div className="weather-info-day">
      <Temperature
        temp_value={weatherData.main.temp}
        measurement={measurement}
      />

      <div className="date">
        <span id="date">{moment().format("Do MMM YY")}</span>
      </div>
      <div className="day-of-week-time">
        <span className="day-of-week">{moment().format("dddd")}</span>
        <span className="time">{moment().format("h:mm A")}</span>
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

export default WeatherInfoDay;