import React, { useEffect, useState } from "react";
import Switcher from "../common/Switcher";
import WeatherToday from "./WeatherToday/WeatherToday";
import Forecast from "./Forecast";
import Location from "../Sidebar/Location";

const Content = ({ weatherData, forecastData }) => {
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
    <section className="container_outer container_vertical content">
      {!isDesktop && (
        <Location
          city={weatherData.data.name}
          country={weatherData.data.sys.country}
        />
      )}
      <div className="container_horizontal content_header">
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            weatherData.data.weather[0].icon +
            "@2x.png"
          }
          className="icon_actual"
          width="100px"
          height="100px"
          alt="Actual weather"
        />
        <Switcher />
      </div>
      <WeatherToday weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </section>
  );
};

export default Content;
