import React from 'react'
import Wind from './../../../../images/Wind.svg';
import Humidity from './../../../../images/Humidity.svg';
import Rain from './../../../../images/Rain.svg';
import VerticalLine from './../../../../images/VerticalLine.svg';

const Details = (props) => {
    return (
        <div className='details'>
            <img src={Wind} alt='Wind' />
            <span>Wind</span>
            <span id='wind'>{props.wind}</span>
            <img src={VerticalLine} alt='VerticalLine' />
            <img src={Humidity} alt='Humidity' />
            <span>Hum</span>
            <span id='hum'>{props.humidity} %</span>
            <img src={VerticalLine} alt='VerticalLine' />
            <img src={Rain} alt='Rain' />
            <span>Rain</span>
            <span id='rain'>{props.rain} %</span>
        </div>
    )
}

export default Details