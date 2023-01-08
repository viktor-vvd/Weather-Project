import React from 'react'

const DayInfoCard = React.forwardRef((props, ref) => (
  <div className='day-info-card' ref={ref}>
    <div>
      <span>
        <span id='temp-value'>{props.tempValue}</span>
        <span>°</span>
        <span id='temp-measurement'>{props.tempMeasurement}</span>
      </span>
      <img src={props.weatherPic} alt='Pic' />
      <span id='day-of-week'>{props.dayofWeek}</span>
    </div>
  </div>
));

export default DayInfoCard

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