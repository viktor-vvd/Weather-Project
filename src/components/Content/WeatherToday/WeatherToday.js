import React, { useEffect, useState } from "react";
import Details from "./Details";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const WeatherToday = () => {
  const { weatherData } = useSelector((state) => state.data);
  const { t } = useTranslation();
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
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
        <div className="container_horizontal temp__units">
          <span className="headline units__degree">{"\u00b0"}</span>
          <span className="headline units__symbol">
            {weatherData.imperial ? "F" : "C"}
          </span>
        </div>
      </div>
      <div className="container_vertical weather-today__date">
        <h3 className="headline date__full-date">
          {t("date.date", { value: time })}
        </h3>
        <div className="container_horizontal date__time">
          <span className="headline day">{
            `${t("date.weekday", { value: time }).charAt(0).toUpperCase()}${t(
              "date.weekday",
              { value: time }
            ).slice(1)}`
          }</span>
          <span className="headline time">
            {time.format(weatherData.imperial ? "hh:mm A" : "HH:mm")}
          </span>
        </div>
      </div>
      <Details />
    </div>
  );
};

export default WeatherToday;
