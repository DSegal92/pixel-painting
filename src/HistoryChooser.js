import React from 'react'

const SizeChooser = ({ max, value, handleHistoryUpdate }) => (
  <input type="range"
         min="0"
         max={ max }
         step="1"
         value={ value }
         onChange={ (e) => handleHistoryUpdate(e.target.value) } />
)

export default SizeChooser;
