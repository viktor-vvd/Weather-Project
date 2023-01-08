import React from 'react'

const Humidity = (props) => {
  return (
    <div className='additional-info-block'>
      <span>Humidity</span>
      <span>{props.humidity}%</span>
    </div>
  )
}

export default Humidity