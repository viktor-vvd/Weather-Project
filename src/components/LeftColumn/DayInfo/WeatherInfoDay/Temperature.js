import React from "react";

const Temperature = ({ temp_value, measurement }) => {
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
