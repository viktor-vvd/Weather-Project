import React from 'react'
import Sunset from './../../images/Sunset.svg';
import Sunrise from './../../images/Sunrise.svg';

const SunriseSunset = (props) => {

  function ShowPic() {
    if (props.type === "Sunrise") {
      return <img src={Sunrise} alt='Sunrise' />
    }
    return <img src={Sunset} alt='Sunset' />
  }

  return (
    <div className='sunrise-sunset'>
      <span className='type'>{props.type}</span>
      <div className='card'>
        <div className='clock'>
          <span className="hour" style={{ transform: 'rotate(' + props.hour * 30 + 'deg)' }}></span>
          <span className="minute" style={{ transform: 'rotate(' + props.minute * 6 + 'deg)' }}></span>
          <span className="dot"></span>
        </div>
        <div className='time'>
          <span>{props.hour}:{props.minute}</span>
          <span> {props.meridiem}</span>
        </div>
        <ShowPic />
      </div>
    </div>
  )
}

export default SunriseSunset