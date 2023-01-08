import React from 'react'
import Temperature from './Temperature';
import Details from './Details';

const WeatherInfoDay = () => {
  return (
    <div className='weather-info-day'>
      <Temperature temp_value="25" temp_measurement="C"/>

      <div className='date'>
        <span id="date">14th Mar 22</span>
      </div>

      <div className='day-of-week-time'>
        <span id="day-of-week">Monday</span>
        <span id="time">10:40 AM</span>
      </div>

      <Details wind="10" humidity="54" rain="0.2"/>
      
    </div>
  )
}

export default WeatherInfoDay