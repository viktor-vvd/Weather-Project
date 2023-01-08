import React from 'react';
import WeatherImage from './DayInfo/WeatherImage';
import Switcher from './Switcher';
import WeatherInfoDay from './DayInfo/WeatherInfoDay/WeatherInfoDay';
import WeekInfo from './WeekInfo/WeekInfo';

const LeftColumn = () => {
  return (
    <div className='left-column'>
      <div className='left-header header'> 
        <WeatherImage/>
        <Switcher/>
      </div>

      <div className='content'>
        <WeatherInfoDay/>
      </div>

      <div className='content'>
        <WeekInfo/>
      </div>
    </div>
  )
}

export default LeftColumn