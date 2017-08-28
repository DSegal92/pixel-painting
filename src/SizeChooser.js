import React from 'react'

const SizeChooser = ({ value, handleSizeUpdate }) => (
  <div className="size-chooser">
    <input type="range"
           min="0.1"
           max="1"
           step=".01"
           value={ value }
           onChange={ (e) => handleSizeUpdate(e.target.value) } />
    <span> { value } </span>
  </div>
)

export default SizeChooser;
