import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/modalSlice";
import { setLocation } from "../../store/locationSlice";
import Cookies from "js-cookie";
import { fetchGeocodingData } from "../../services/api";

const LocationModal = () => {
  const modal = useSelector((state) => state.modal.modal);
  const { weatherData } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [matches, setMatches] = useState([]);

  const onInputChange = async (value) => {
    setInputValue(value);
    if (value.length > 0) {
      //console.log(value.length);
      fetchGeocodingData(value, setMatches);
    } else if (value.length === 0) {
      setMatches([]);
    }
  };

  const onLocationItemClick = (item) => {
    //console.log(item);
    dispatch(setLocation(item));
    Cookies.set("location", JSON.stringify(item));
    dispatch(setModal(!modal));
  };

  useEffect(() => {
    modal && setInputValue("");
    modal && setMatches([]);
  }, [modal]);

  return (
    <>
      <div
        className={`container_vertical location-modal${
          modal ? "" : " location-modal_hidden"
        }`}
      >
        <div
          className={`container_vertical location-modal__bg${
            modal ? "" : " location-modal__bg_hidden"
          }`}
        ></div>
        <div
          className={`container_vertical location-modal__container${
            modal ? "" : " location-modal__container_hidden"
          }`}
        >
          <input
            className="headline location-modal__input"
            name="password"
            type="text"
            value={inputValue}
            placeholder={`${weatherData.data.name || "Lutsk"}, ${weatherData.data.sys.country || "UA"}`}
            onChange={(e) => onInputChange(e.target.value)}
          />
          {matches && matches.length > 0 && (
            <ul className="container_vertical location-modal__list">
              {matches.map((item, index) => (
                <li
                  key={"location_" + index}
                  className="list__item"
                  onClick={() => onLocationItemClick(item)}
                >
                  <span className="title">
                    {`${item.name}, ${item.state ? `${item.state}, ` : ""} ${
                      item.country
                    }`}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default LocationModal;
