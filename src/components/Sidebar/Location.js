import React from "react";
import Geolocation from "./../../images/Geolocation.svg";
import More from "./../../images/More.svg";
import LocationModal from "../modals/LocationModal";
import { changeModal } from "../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Location = ({ city, country }) => {
  const modal = useSelector((state) => state.modal.modal);
  /* const location = useSelector((state) => state.location.location);
  console.log(location); */
  const dispatch = useDispatch();
  return (
    <div className="container_horizontal location__container">
      <div
        className={
          "container_horizontal location" + (modal ? " location_hidden" : "")
        }
      >
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
      <div
        title={modal ?"Close":"Select location"}
        className={
          "location__button" + (modal ? " location__button_close" : "")
        }
        onClick={() => dispatch(changeModal(!modal))}
      >
        <img src={More} alt="More" width="35px" height="35px" />
      </div>
      <LocationModal />
    </div>
  );
};

export default Location;
