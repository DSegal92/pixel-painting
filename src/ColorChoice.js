import React from 'react'

const ColorChoice = ({ color, handleChooseColor }) => (
  <div  className="color-picker__choice"
        style={{ backgroundColor: color }}
        onClick={ () => handleChooseColor(color) }>
  </div>
)

export default ColorChoice;
