import React from "react";
import { useSelector } from "react-redux";

const Temperature = ({ temp_value }) => {
  const measurement = useSelector((state) => state.measurement.measurement);

  return (
    <div className="temperature">
      <span className="temp-value">{Math.round(temp_value)}</span>
      <div>
        <span className="temp-degree">o</span>
        {measurement ? (
          <span className="temp-measurement">F</span>
        ) : (
          <span className="temp-measurement">C</span>
        )}
      </div>
    </div>
  );
};

export default Temperature;
