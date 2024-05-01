import React from "react";
/* import { useSelector } from "react-redux"; */

const AdditionalInfo = ({ title, value = null, units = null, icon = null }) => {
  const val = isNaN(value) ? value : Math.round(value * 10) / 10;
  /* const units = useSelector((state) => state.units.units); */
  return (
    <div className="container_vertical additional-info">
      <h5 className="headline">{title}</h5>
      <div className="container_horizontal additional-info__content">
        <span className="headline_bold">
          {(!isNaN(val) || val) ? val : "No data"}
          {(!isNaN(val) || val) ? units : ""}
        </span>
        {icon && (
          <img
            className="additional-info__icon"
            src={icon}
            alt="Icon"
            width="19px"
            height="19px"
          />
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
