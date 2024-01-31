import React, { useEffect, useState } from "react";
import Details from "./Details";
import moment from "moment";
/* import { useSelector } from "react-redux"; */

const WeatherToday = ({ weatherData }) => {
  /* const measurement = useSelector((state) => state.measurement.measurement); */
  const [date, setDate] = useState(moment().format("dddd"));
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(moment().format("dddd"));
      setTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container_vertical weather-today">
      <div className="container_horizontal weather-today__temp">
        <h3 className="headline temp__value">
          {Math.round(weatherData.data.main.temp)}
        </h3>
        <div className="container_horizontal temp__measurement">
          <span className="headline measurement__degree">o</span>
          <span className="headline measurement__symbol">
            {weatherData.imperial ? "F" : "C"}
          </span>
        </div>
      </div>
      <div className="container_vertical weather-today__date">
        <h3 className="headline date__full-date">
          {moment().format("Do MMM YY")}
        </h3>
        <div className="container_horizontal date__time">
          <span className="headline day">{date}</span>
          <span className="headline time">
            {time.format(weatherData.imperial ? "hh:mm A" : "HH:mm")}
          </span>
        </div>
      </div>
      <Details
        wind={weatherData.data.wind.speed}
        humidity={weatherData.data.main.humidity}
        pressure={weatherData.data.main.pressure}
        imperial={weatherData.imperial}
      />
    </div>
  );
};

export default WeatherToday;
