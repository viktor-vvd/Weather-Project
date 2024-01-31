import React from "react";
import VerticalLine from "./../../../images/VerticalLine.svg";
import { WiBarometer, WiWindDeg, WiHumidity } from "react-icons/wi";
/* import { useSelector } from "react-redux"; */

const Details = ({ wind, humidity, pressure, imperial }) => {
  return (
    <div className="container_horizontal details">
      <div className="container_horizontal details__item">
        <div className="container_horizontal details__title">
          <WiWindDeg />
          <span className="text">Wind</span>
        </div>
        <span className="text">
          {Math.round(wind * 10) / 10 + " " + (imperial ? "mph" : "m/s")}
        </span>
      </div>
      <img src={VerticalLine} alt="VerticalLine" />
      <div className="container_horizontal details__item">
        <div className="container_horizontal details__title">
          <WiHumidity />
          <span className="text">Humidity</span>
        </div>
        <span className="text">{humidity} %</span>
      </div>
      <img src={VerticalLine} alt="VerticalLine" />
      <div className="container_horizontal details__item">
        <div className="container_horizontal details__title">
          <WiBarometer />
          <span className="text">Pressure</span>
        </div>
        <span className="text">{pressure} hPa</span>
      </div>
    </div>
  );
};

export default Details;
