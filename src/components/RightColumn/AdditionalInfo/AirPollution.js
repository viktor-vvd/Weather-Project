import React from "react";

const AirPollution = ({ airData }) => {

  return (
    <div className="additional-info-block">
      <span>Air Pollution</span>
      {typeof airData != "undefined" ? (
        <span>{airData[0].main.aqi}/5</span>
      ) : (
        <span>ERROR</span>
      )}
    </div>
  );
};

export default AirPollution;
