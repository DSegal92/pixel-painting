import React from 'react'
import ColorChoice from './ColorChoice'

const ColorPicker = (props) => (
  <div style={{ float: 'left', marginTop: '30px' }}>
    { ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map(x =>
      <ColorChoice color={ x } {...props} />
    ) }
  </div>
)

export default ColorPicker;
