import React from "react";

const Switcher = ({ measurement, setMeasurement }) => {
  return (
    <label className="switcher">
      
      <input type="checkbox" id="switcher_checkbox" checked={measurement} onChange={() => setMeasurement(measurement => !measurement)}></input>
      <span className="slider round"></span>
      <div className="C-F-container">
        <span>C</span>
        <span>F</span>
      </div>
    </label>
  );
};

export default Switcher;
