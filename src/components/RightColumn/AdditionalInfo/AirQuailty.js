import React from 'react'

const AirQuailty = (props) => {
    return (
        <div className='additional-info-block'>
            <span>Air Quality</span>
            <span>{props.airquality}/10</span>
        </div>
    )
}

export default AirQuailty