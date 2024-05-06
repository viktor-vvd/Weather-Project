import React from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";
import moment from "moment";
import { useTranslation } from "react-i18next";
/* import { useSelector } from "react-redux"; */

const SunriseSunset = ({ type, time, imperial }) => {
  const { t } = useTranslation();
  function ShowPic() {
    if (type === t("sidebar.sunrise")) {
      return <WiSunrise />;
    }
    return <WiSunset />;
  }

  /* const units = useSelector((state) => state.units.units); */

  return (
    <div className="container_vertical sunrise-sunset">
      <h4 className="headline_bold sunrise-sunset__type">{type}</h4>
      <div className="container_vertical sunrise-sunset__card">
        <div className="sunrise-sunset__clock">
          <div
            className="clock__hour"
            style={{
              transform: `rotate(${moment.unix(time).format("hh") * 30}deg)`,
            }}
          ></div>
          <div
            className="clock__minute"
            style={{
              transform: `rotate(${moment.unix(time).format("mm") * 6}deg)`,
            }}
          ></div>
          <div className="clock__dot"></div>
        </div>
        <span className="title sunrise-sunset__time">
          {moment.unix(time).format(imperial ? "hh:mm" : "HH:mm")}
          {imperial && (
            <span className="text_light"> {moment.unix(time).format("A")}</span>
          )}
        </span>
        <ShowPic />
      </div>
    </div>
  );
};

export default SunriseSunset;
