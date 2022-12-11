import React from 'react'

const Switcher = () => {
  return (
    <label className='Switcher'>
      <input type="checkbox"></input>
      <span className="slider round"></span>
      <div className='CFcontainer'>
        <span>C</span>
        <span>F</span>
      </div>
    </label>
  )
}

export default Switcher