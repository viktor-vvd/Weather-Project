import React from "react";

const Switcher = ({
  className = "",
  sourceValue = true,
  values = ["1", "2"],
  onChange = () => {},
  title = "",
}) => {
  return (
    <div className={`switcher__container ${className}`}>
      <label className="switcher" title={title}>
        <input
          type="checkbox"
          className="switcher__checkbox"
          checked={sourceValue}
          onChange={onChange}
        ></input>
        <div className="switcher__toggle" />
        <div className="container_horizontal switcher__value">
          <span className="title">{values[0]}</span>
          <span className="title">{values[1]}</span>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
