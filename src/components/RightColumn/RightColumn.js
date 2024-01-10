import React from "react";
import Location from "./Location/Location";
import MoreButton from "./Location/MoreButton";
import SunriseSunset from "./SunriseSunset";
import Cloudiness from "./AdditionalInfo/Cloudiness";
import WindDir from "./AdditionalInfo/WindDir";
import AirPollution from "./AdditionalInfo/AirPollution";
import WindGust from "./AdditionalInfo/WindGust";

const RightColumnComponent = ({ weatherData, airData }) => {
  return (
    <div className="right-column">
      <div className="right-header header">
        <Location city={weatherData.name} country={weatherData.sys.country} />
        <MoreButton />
      </div>

      <div className="right-content">
        <SunriseSunset type="Sunrise" time={weatherData.sys.sunrise} />
        <SunriseSunset type="Sunset" time={weatherData.sys.sunset} />
      </div>

      <div className="content">
        <div className="line"></div>
        <div className="info">
          <span>i</span>
        </div>
      </div>

      <div className="content">
        <Cloudiness cloudiness={weatherData.clouds.all} />
        <WindDir dir={weatherData.wind.deg} />
      </div>

      <div className="content">
        <AirPollution airData={airData} />
        <WindGust windGust={weatherData.wind.gust} />
      </div>
    </div>
  );
};

export default RightColumnComponent;
