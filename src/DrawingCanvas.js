import React from 'react';
import Cell from './Cell.js';

const DrawingCanvas = (props) => {
  return (
    <div className="drawing-canvas"
         style={{ transform: `scale(${props.scale}, ${props.scale}) translateZ(0)` }}>
    { props.board.map((x_row, x) =>
        x_row.map((y_value, y) =>
          <Cell key={`${x}${y}`} x={x} y={y} color={y_value} {...props} />
        )
    )}
    </div>
  )
}

export default DrawingCanvas;
