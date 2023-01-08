import React from 'react'

const Temperature = (props) => {
    return (
        <div className='temperature'>
            <span className='temp-value'>{props.temp_value}</span>
            <div>
                <span className='temp-degree'>o</span>
                <span className='temp-measurement'>{props.temp_measurement}</span>
            </div>
        </div>
    )
}

export default Temperature