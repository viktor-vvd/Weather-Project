import React from 'react'
import { WiSunrise, WiSunset } from "react-icons/wi";
import moment from 'moment';

const SunriseSunset = (props) => {

  function ShowPic() {
    if (props.type === "Sunrise") {
      return <WiSunrise />
    }
    return <WiSunset />
  }

  return (
    <div className='sunrise-sunset'>
      <span className='type'>{props.type}</span>
      <div className='card'>
        <div className='clock'>
          <span className="hour" style={{ transform: 'rotate(' + moment.unix(props.time).format("hh") * 30 + 'deg)' }}></span>
          <span className="minute" style={{ transform: 'rotate(' + moment.unix(props.time).format("mm") * 6 + 'deg)' }}></span>
          <span className="dot"></span>
        </div>
        <div className='time'>
          <span>{moment.unix(props.time).format("hh")}:{moment.unix(props.time).format("mm")}</span>
          <span> {moment.unix(props.time).format("A")}</span>
        </div>
        <ShowPic />
      </div>
    </div>
  )
}

export default SunriseSunset