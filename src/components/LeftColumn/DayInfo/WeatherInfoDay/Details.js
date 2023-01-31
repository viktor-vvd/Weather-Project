import React from "react";
import VerticalLine from "./../../../../images/VerticalLine.svg";
import { WiBarometer, WiWindDeg, WiHumidity } from "react-icons/wi";

const Details = ({ wind, humidity, pressure, measurement }) => {
  return (
    <div className="details">
      <WiWindDeg />
      <span>Wind</span>
      {measurement ? (
        <span id="wind">{Math.round(wind * 10) / 10} mph</span>
      ) : (
        <span id="wind">{Math.round(wind * 10) / 10} m/s</span>
      )}
      <img src={VerticalLine} alt="VerticalLine" />
      <WiHumidity />
      <span>Hum</span>
      <span id="hum">{humidity} %</span>
      <img src={VerticalLine} alt="VerticalLine" />
      <WiBarometer />
      <span>Pressure</span>
      <span>{pressure} hPa</span>
    </div>
  );
};

export default Details;