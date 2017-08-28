import React from 'react'
import ColorChoice from './ColorChoice'

const ColorPicker = (props) => (
  <div className="color-picker">
    { ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map(x =>
      <ColorChoice key={ x }color={ x } {...props} />
    ) }
  </div>
)

export default ColorPicker;
