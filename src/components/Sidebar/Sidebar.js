import React, { useEffect, useState } from "react";
import SunriseSunset from "./SunriseSunset";
import Wind from "./../../images/WindSpeed.svg";
import AdditionalInfo from "../common/AdditionalInfo";
import { useTranslation } from "react-i18next";
import Preferences from "../common/Preferences";

function Sidebar({ weatherData, airData }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1279);
  const { t } = useTranslation();

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
    <div className="container_outer container_vertical sidebar">
      {isDesktop && (
        <Preferences
          city={weatherData.data.name}
          country={weatherData.data.sys.country}
        />
      )}
      <div className="container_horizontal sidebar__sunrise-sunset">
        <SunriseSunset
          type={t("sidebar.sunrise")}
          time={weatherData.data.sys.sunrise}
          imperial={weatherData.imperial}
        />
        <SunriseSunset
          type={t("sidebar.sunset")}
          time={weatherData.data.sys.sunset}
          imperial={weatherData.imperial}
        />
      </div>
      <hr className="sidebar__divider" />

      <div className="sidebar__additional-info">
        <AdditionalInfo
          title={t("sidebar.additional_info.cloudiness")}
          value={weatherData.data.clouds.all}
          units={"%"}
        />
        <AdditionalInfo
          title={t("sidebar.additional_info.wind_dir")}
          value={weatherData.data.wind.deg}
          units={"\u00b0"}
        />
        <AdditionalInfo
          title={t("sidebar.additional_info.air_pollution")}
          value={airData.data[0].main.aqi}
          units={"/5"}
        />
        <AdditionalInfo
          title={t("sidebar.additional_info.wind_gust")}
          value={weatherData.data.wind.gust}
          units={
            " " +
            t(`units.speed.${weatherData.imperial ? "imperial" : "metric"}`)
          }
          icon={Wind}
        />
      </div>
    </div>
  );
}

export default Sidebar;
