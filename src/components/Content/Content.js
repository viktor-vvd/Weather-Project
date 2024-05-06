import React, { useEffect, useState } from "react";
import Switcher from "../common/Switcher";
import WeatherToday from "./WeatherToday/WeatherToday";
import Forecast from "./Forecast";
import { useTranslation } from "react-i18next";
import Preferences from "../common/Preferences";
import { useDispatch, useSelector } from "react-redux";
import { changeUnits } from "../../store/unitsSlice";
import Cookies from "js-cookie";

const Content = ({ weatherData, forecastData }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1279);
  const { t } = useTranslation();
  const units = useSelector((state) => state.units.units);
  const dispatch = useDispatch();

  const unitsChange = () => {
    dispatch(changeUnits(!units));
    Cookies.set("units", !units);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth > 1279);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <section className="container_outer container_vertical content">
      {!isDesktop && (
        <Preferences
          city={weatherData.data.name}
          country={weatherData.data.sys.country}
        />
      )}
      <div className="container_horizontal content_header">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
          className="icon_actual"
          width="100px"
          height="100px"
          alt={t("header.actual_weather")}
          title={t("header.actual_weather")}
        />
        <Switcher
          sourceValue={units}
          values={["C", "F"]}
          onChange={unitsChange}
          title={t("header.units_switch_title")}
        />
      </div>
      <WeatherToday weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </section>
  );
};

export default Content;
