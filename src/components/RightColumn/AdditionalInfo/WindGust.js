import React from "react";
import Wind from "./../../../images/WindSpeed.svg";

const WindGust = ({ windGust, measurement }) => {
  return (
    <div className="additional-info-block">
      <span>Wind Gust</span>
      {measurement ? (
        <span>
          {Math.round(windGust * 10) / 10} mph <img src={Wind} alt="Wind" />
        </span>
      ) : (
        <span>
          {Math.round(windGust * 10) / 10} m/s <img src={Wind} alt="Wind" />
        </span>
      )}
    </div>
  );
};

export default WindGust;
