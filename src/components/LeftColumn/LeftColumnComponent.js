import React from 'react';
import WeatherImage from './DayInfo/WeatherImage';
import Switcher from './Switcher';
import WeatherInfoDay from './DayInfo/WeatherInfoDay';
import WeekInfo from './WeekInfo/WeekInfo';

const LeftColumnComponent = () => {
  return (
    <div className='LeftColumn'>
      <div className='LeftHeader'> 
        <WeatherImage/>
        <Switcher/>
      </div>

      <div className='LeftContent'>
        <WeatherInfoDay/>
      </div>

      <div className='LeftContent'>
        <WeekInfo/>
      </div>
    </div>
  )
}

export default LeftColumnComponent