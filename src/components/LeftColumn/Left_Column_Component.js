import React from 'react';
import WeatherImage from './DayInfo/WeatherImage';
import Switcher from './Switcher';
import WeatherInfoDay from './DayInfo/Weather_Info_Day';
import WeekInfo from './WeekInfo/Week_Info';

const Left_Column_Component = () => {
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

export default Left_Column_Component