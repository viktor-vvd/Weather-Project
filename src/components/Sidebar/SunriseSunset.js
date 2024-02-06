import React from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";
import moment from "moment";
/* import { useSelector } from "react-redux"; */

const SunriseSunset = ({ type, time, imperial }) => {
  function ShowPic() {
    if (type === "Sunrise") {
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
          <span
            className="clock__hour"
            style={{
              transform:
                "rotate(" + moment.unix(time).format("hh") * 30 + "deg)",
            }}
          ></span>
          <span
            className="clock__minute"
            style={{
              transform:
                "rotate(" + moment.unix(time).format("mm") * 6 + "deg)",
            }}
          ></span>
          <span className="clock__dot"></span>
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
