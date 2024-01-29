import React from "react";
import Geolocation from "./../../images/Geolocation.svg";
import More from "./../../images/More.svg";

const Location = ({ city, country }) => {
  return (
    <div className="container_horizontal location__container">
      <div className="container_horizontal location">
        <img
          className="location__icon"
          src={Geolocation}
          alt="Geolocation"
          width="32px"
          height="32px"
        />
        <span className="headline">
          {city || "Lutsk"}, {country || "Ukraine"}
        </span>
      </div>
      <div className="location__button">
        <img src={More} alt="More" width="35px" height="35px" />
      </div>
    </div>
  );
};

export default Location;
