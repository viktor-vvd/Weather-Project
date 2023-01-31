import React from "react";
import WeatherImage from "./DayInfo/WeatherImage";
import Switcher from "./Switcher";
import WeatherInfoDay from "./DayInfo/WeatherInfoDay/WeatherInfoDay";
import WeekInfo from "./WeekInfo/WeekInfo";

const LeftColumn = ({
  weatherData,
  forecastData,
  measurement,
  setMeasurement,
}) => {
  return (
    <div className="left-column">
      <div className="left-header header">
        <WeatherImage icon={weatherData.weather[0].icon} />
        <Switcher measurement={measurement} setMeasurement={setMeasurement} />
      </div>

      <div className="content">
        <WeatherInfoDay weatherData={weatherData} measurement={measurement} />
      </div>

      <div className="content">
        <WeekInfo forecastData={forecastData} measurement={measurement} />
      </div>
    </div>
  );
};

export default LeftColumn;