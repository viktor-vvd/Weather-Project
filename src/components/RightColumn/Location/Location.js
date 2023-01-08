import React from 'react'
import Geolocation from './../../../images/Geolocation.svg';

const Location = () => {
  return (
    <div className='location'>
      <img src={Geolocation} alt='Geolocation' />
      <span id='location-name'>Jhansi, India</span>
    </div>
  )
}

export default Location