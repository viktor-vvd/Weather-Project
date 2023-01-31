import React from 'react'
import Geolocation from './../../../images/Geolocation.svg';

const Location = (props) => {
  return (
    <div className='location'>
      <img src={Geolocation} alt='Geolocation' />
      <span id='location-name'>{props.city}, {props.country}</span>
    </div>
  )
}

export default Location