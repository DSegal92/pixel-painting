import React from 'react'

const SizeChooser = ({ value, handleSizeUpdate }) => (
  <input type="range"
         min="0.1"
         max="1"
         step=".01"
         value={ value }
         onChange={ (e) => handleSizeUpdate(e.target.value) } />
)

export default SizeChooser;
