import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMeasurement } from "../../store/measurementSlice";

const Switcher = (/* { measurement, setMeasurement } */) => {
  const measurement = useSelector((state) => state.measurement.measurement);
  const dispatch = useDispatch();
  return (
    <label className="switcher">
      <input
        type="checkbox"
        id="switcher_checkbox"
        checked={measurement}
        onChange={() => dispatch(changeMeasurement({ measurement }))}
      ></input>
      <span className="slider round"></span>
      <div className="C-F-container">
        <span>C</span>
        <span>F</span>
      </div>
    </label>
  );
};

export default Switcher;
