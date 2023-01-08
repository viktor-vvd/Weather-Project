import React from 'react'

const Switcher = () => {
  return (
    <label className='switcher' >
      <input type="checkbox" id='switcher_checkbox'></input>
      <span className="slider round"></span>
      <div className='C-F-container'>
        <span>C</span>
        <span>F</span>
      </div>
    </label>
  )
}

export default Switcher