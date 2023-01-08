import React from 'react'
import Location from './Location/Location';
import MoreButton from './Location/MoreButton';
import SunriseSunset from './SunriseSunset';
import Humidity from './AdditionalInfo/Humidity';
import ChanceofRain from './AdditionalInfo/ChanceofRain';
import AirQuailty from './AdditionalInfo/AirQuailty';
import WindSpeed from './AdditionalInfo/WindSpeed';


const RightColumnComponent = () => {
  return (
    <div className='right-column'>
      <div className='right-header header'>
        <Location />
        <MoreButton />
      </div>

      <div className='right-content'>
        <SunriseSunset type="Sunrise" hour="7" minute="30" meridiem="AM" />
        <SunriseSunset type="Sunset" hour="5" minute="45" meridiem="PM" />
      </div>

      <div className='content'>
        <div className='line'></div>
        <div className='info'>
          <span>i</span>
        </div>
      </div>

      <div className='content'>
        <Humidity humidity="38" />
        <ChanceofRain chance="2" />
      </div>

      <div className='content'>
        <AirQuailty airquality="3" />
        <WindSpeed windspeed="3.8" />
      </div>
    </div>
  )
}

export default RightColumnComponent
