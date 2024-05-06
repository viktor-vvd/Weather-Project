import React from "react";
import Geolocation from "./../../images/Geolocation.svg";
import More from "./../../images/More.svg";
import LocationModal from "../modals/LocationModal";
import { changeModal } from "../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Location = ({ city, country }) => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  return (
    <div className="container_horizontal location__container">
      <div
        className={`container_horizontal location${
          modal ? " location_hidden" : ""
        }`}
      >
        <img
          className="location__icon"
          src={Geolocation}
          alt="Geolocation"
          width="32px"
          height="32px"
        />
        <span className="headline">
          {`${city || "Lutsk"}, ${country || "UA"}`}
        </span>
      </div>
      <div
        title={modal ? "Close" : "Select location"}
        className={`location__button${modal ? " location__button_close" : ""}`}
        onClick={() => dispatch(changeModal(!modal))}
      >
        <img src={More} alt={t("location.more")} width="35px" height="35px" />
      </div>
      <LocationModal placeholder={`${city || "Lutsk"}, ${country || "UA"}`} />
    </div>
  );
};

export default Location;
