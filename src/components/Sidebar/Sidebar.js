import React, { useEffect, useState } from "react";
import Location from "./Location";
import SunriseSunset from "./SunriseSunset";
import Wind from "./../../images/WindSpeed.svg";
import AdditionalInfo from "../common/AdditionalInfo";

function Sidebar({ weatherData, airData }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1279);

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
        <Location
          city={weatherData.data.name}
          country={weatherData.data.sys.country}
        />
      )}
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
          units={"%"}
        />
        <AdditionalInfo
          title="Wind Direction"
          value={weatherData.data.wind.deg}
          units={"\u00b0"}
        />
        <AdditionalInfo
          title="Air Pollution"
          value={airData.data[0].main.aqi}
          units={"/5"}
        />
        <AdditionalInfo
          title="Wind Gust"
          value={weatherData.data.wind.gust}
          units={weatherData.imperial ? " mph" : " m/s"}
          icon={Wind}
        />
      </div>
    </div>
  );
}

export default Sidebar;
