import React from 'react'

const Cloudiness = (props) => {
  return (
    <div className='additional-info-block'>
      <span>Cloudiness</span>
      <span>{props.cloudiness}%</span>
    </div>
  )
}

export default Cloudiness