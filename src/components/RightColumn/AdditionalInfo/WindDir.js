import React from 'react'

const WindDir = (props) => {
  return (
    <div className='additional-info-block'>
      <span> Wind Direction</span>
      <span>{props.dir}&deg;</span>
    </div>
  )
}

export default  WindDir