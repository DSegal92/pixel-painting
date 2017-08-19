import React from 'react'

const ColorChoice = ({ color, handleChooseColor }) => (
  <div style={{ backgroundColor: color,
                display: 'block',
                width: '100px',
                height: '30px',
                cursor: 'pointer' }}
      onClick={ () => handleChooseColor(color) }>
  </div>
)

export default ColorChoice;
