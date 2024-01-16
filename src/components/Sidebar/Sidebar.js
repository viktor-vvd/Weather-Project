import React from "react";
import Location from "./Location";
import SunriseSunset from "./SunriseSunset";
import InfoIcon from "./../../images/InfoIcon.svg";
import Wind from "./../../images/WindSpeed.svg";
import AdditionalInfo from "../common/AdditionalInfo";

function Sidebar({ weatherData, airData }) {
  return (
    <div className="container_outer container_vertical sidebar">
      <Location city={weatherData.name} country={weatherData.sys.country} />
      <div className="container_horizontal sidebar__sunrise-sunset">
        <SunriseSunset type="Sunrise" time={weatherData.sys.sunrise} />
        <SunriseSunset type="Sunset" time={weatherData.sys.sunset} />
      </div>
      <div className="container_horizontal sidebar__divider">
        <hr />
        <img
          className="divider__icon"
          src={InfoIcon}
          alt="Info"
          width="40px"
          height="40px"
        />
      </div>

      <div className="sidebar__additional-info">
        <AdditionalInfo
          title="Cloudiness"
          value={weatherData.clouds.all}
          measurements={{ metric: "%" }}
        />
        <AdditionalInfo
          title="Wind Direction"
          value={weatherData.wind.deg}
          measurements={{ metric: "\u00b0" }}
        />
        <AdditionalInfo
          title="Air Pollution"
          value={airData[0].main.aqi}
          measurements={{ metric: "/5" }}
        />
        <AdditionalInfo
          title="Wind Gust"
          value={weatherData.wind.gust}
          measurements={{ metric: " m/s", imperial: " mph" }}
          icon={Wind}
        />
      </div>
    </div>
  );
}

export default Sidebar;
