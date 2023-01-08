import React from 'react'
import Wind from './../../../images/WindSpeed.svg';

const WindSpeed = (props) => {
    return (
        <div className='additional-info-block'>
            <span>Wind Speed</span>
            <span>{props.windspeed} km/h <img src={Wind} alt='Wind' /></span>
        </div>
    )
}

export default WindSpeed