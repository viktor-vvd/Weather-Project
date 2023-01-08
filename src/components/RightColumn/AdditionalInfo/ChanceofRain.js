import React from 'react'

const ChanceofRain = (props) => {
  return (
    <div className='additional-info-block'>
      <span>Chance of rain</span>
      <span>{props.chance}%</span>
    </div>
  )
}

export default ChanceofRain