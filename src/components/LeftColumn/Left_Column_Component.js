import React from 'react';
import Weather_Image from './DayInfo/Weather_Image';
import Switcher from './Switcher';
import Weather_Info_Day from './DayInfo/Weather_Info_Day';
import Week_Info from './WeekInfo/Week_Info';

const Left_Column_Component = () => {
  return (
    <div className='Left_Column'>
      <div className='Left_Header'> 
        <Weather_Image/>
        <Switcher/>
      </div>

      <div className='Left_Content'>
        <Weather_Info_Day/>
        <Week_Info/>
      </div>
    </div>
  )
}

export default Left_Column_Component