import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnits } from "../../store/unitsSlice";

const Switcher = () => {
  const units = useSelector((state) => state.units.units);
  const dispatch = useDispatch();
  return (
    <label className="switcher">
      <input
        type="checkbox"
        className="switcher__checkbox"
        checked={units}
        onChange={() => dispatch(changeUnits({ units }))}
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
