import React from "react";
import moment from "moment";
/* import { useSelector } from "react-redux"; */

const WeatherCard = ({ tempValue, icon, time, imperial }) => {
  /* const units = useSelector((state) => state.units.units); */

  return (
    <swiper-slide class="container_vertical weather-card__container">
      <div className="container_vertical weather-card">
        <span className="weather-card__temp">
          <span className="subtitle">
            {Math.round(tempValue) + "\u00b0" + (imperial ? "F" : "C")}
          </span>
        </span>
        <img
          className="weather-card__icon"
          src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
          alt="Pic"
        />
        <span className="subtitle weather-card__time">
          {moment.unix(time).format(imperial ? "HH:mm" : "hh:mm")}
          {imperial && (
            <span className="text_light"> {moment.unix(time).format("A")}</span>
          )}
        </span>
      </div>
    </swiper-slide>
  );
};

export default WeatherCard;
