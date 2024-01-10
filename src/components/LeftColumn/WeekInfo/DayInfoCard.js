import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const DayInfoCard = ({ tempValue, weatherPic, time }) => {
  const measurement = useSelector((state) => state.measurement.measurement);

  return (
    <div>
      <span>
        <span id="temp-value">{Math.round(tempValue)}</span>
        <span>°</span>
        {measurement ? (
          <span className="temp-measurement">F</span>
        ) : (
          <span className="temp-measurement">C</span>
        )}
      </span>
      <img
        src={"http://openweathermap.org/img/wn/" + weatherPic + "@2x.png"}
        alt="Pic"
      />
      <span id="day-of-week">{moment.unix(time).format("hh:mm A")}</span>
    </div>
  );
};

export default DayInfoCard;

/* import React, { useState }  from 'react';
import Rain from './../../../images/Rain.svg';

const DayInfoCard = React.forwardRef(

  function ForwardRef(props, ref) {

    const [is_hidden, setHidden] = useState('DayInfoCard hidden');
    console.log(props.dayofWeek+" "+is_hidden);
    return(
    <div className={is_hidden} ref={ref}>
      <div>
        <span>
          <span id='TemperatureValue'>25</span>
          <span>°</span>
          <span id='TemperatureMeasurement'>C</span>
        </span>
        <img src={Rain} alt='Rain' />
        <span id='DayofWeek'>{props.dayofWeek}TUE</span>
      </div>
    </div>
    );
  },

  function ChangeState(){
    console.log("Change");
  }
);

export default DayInfoCard */
