import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMeasurement } from "../../store/measurementSlice";

const Switcher = () => {
  const measurement = useSelector((state) => state.measurement.measurement);
  const dispatch = useDispatch();
  return (
    <label className="switcher">
      <input
        type="checkbox"
        className="switcher__checkbox"
        checked={measurement}
        onChange={() => dispatch(changeMeasurement({ measurement }))}
      ></input>
      <div className="switcher__toggle" />
      <div className="container_horizontal switcher__value">
        <span className="title">C</span>
        <span className="title">F</span>
      </div>
    </label>
  );
};

export default Switcher;
