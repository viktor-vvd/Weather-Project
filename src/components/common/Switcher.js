import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnits } from "../../store/unitsSlice";
import Cookies from "js-cookie";

const Switcher = () => {
  const units = useSelector((state) => state.units.units);
  const dispatch = useDispatch();

  return (
    <label className="switcher" title="Change units">
      <input
        type="checkbox"
        className="switcher__checkbox"
        checked={units}
        onChange={() => {
          dispatch(changeUnits(!units));
          Cookies.set("units", !units);
        }}
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
