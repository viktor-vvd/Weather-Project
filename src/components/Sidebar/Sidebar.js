import React from "react";
import Location from "./Location";
import SunriseSunset from "./SunriseSunset";
import Wind from "./../../images/WindSpeed.svg";
import AdditionalInfo from "../common/AdditionalInfo";

function Sidebar({ weatherData, airData }) {
  return (
    <div className="container_outer container_vertical sidebar">
      <Location
        city={weatherData.data.name}
        country={weatherData.data.sys.country}
      />
      <div className="container_horizontal sidebar__sunrise-sunset">
        <SunriseSunset
          type="Sunrise"
          time={weatherData.data.sys.sunrise}
          imperial={weatherData.imperial}
        />
        <SunriseSunset
          type="Sunset"
          time={weatherData.data.sys.sunset}
          imperial={weatherData.imperial}
        />
      </div>
      <hr className="sidebar__divider" />

      <div className="sidebar__additional-info">
        <AdditionalInfo
          title="Cloudiness"
          value={weatherData.data.clouds.all}
          measurement={"%"}
        />
        <AdditionalInfo
          title="Wind Direction"
          value={weatherData.data.wind.deg}
          measurement={"\u00b0"}
        />
        <AdditionalInfo
          title="Air Pollution"
          value={airData.data[0].main.aqi}
          measurement={"/5"}
        />
        <AdditionalInfo
          title="Wind Gust"
          value={weatherData.data.wind.gust}
          measurement={weatherData.imperial ? " mph" : " m/s"}
          icon={Wind}
        />
      </div>
    </div>
  );
}

export default Sidebar;
