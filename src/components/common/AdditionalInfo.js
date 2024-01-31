import React from "react";
/* import { useSelector } from "react-redux"; */

const AdditionalInfo = ({
  title,
  value = null,
  measurement = null,
  icon = null,
}) => {
  /* const measurement = useSelector((state) => state.measurement.measurement); */
  return (
    <div className="container_vertical additional-info">
      <h5 className="headline">{title}</h5>
      <div className="container_horizontal additional-info__content">
        <span className="headline_bold">
          {value ? Math.round(value * 10) / 10 : "ERROR"}
          {value && measurement}
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
