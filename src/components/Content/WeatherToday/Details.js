import React from "react";
import VerticalLine from "./../../../images/VerticalLine.svg";
import { WiBarometer, WiWindDeg, WiHumidity } from "react-icons/wi";
import { useTranslation } from "react-i18next";
/* import { useSelector } from "react-redux"; */

const Details = ({ wind, humidity, pressure, imperial }) => {
  const { t } = useTranslation();

  return (
    <div className="container_horizontal details">
      <div className="container_horizontal details__item">
        <div className="container_horizontal details__title">
          <WiWindDeg />
          <span className="text">{t("weather_today.details.wind")}</span>
        </div>
        <span className="text">
          {`${Math.round(wind * 10) / 10} ${t(
            `units.speed.${imperial ? "imperial" : "metric"}`
          )}`}
        </span>
      </div>
      <img className="details__divider" src={VerticalLine} alt="I" />
      <div className="container_horizontal details__item">
        <div className="container_horizontal details__title">
          <WiHumidity />
          <span className="text">{t("weather_today.details.humidity")}</span>
        </div>
        <span className="text">{`${humidity} %`}</span>
      </div>
      <img className="details__divider" src={VerticalLine} alt="I" />
      <div className="container_horizontal details__item">
        <div className="container_horizontal details__title">
          <WiBarometer />
          <span className="text">
            {t("weather_today.details.pressure")}
          </span>
        </div>
        <span className="text">{`${pressure} ${t(
          "units.pressure"
        )}`}</span>
      </div>
    </div>
  );
};

export default Details;
