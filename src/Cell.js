import React, { Component } from 'react'
import './Cell.css';

class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = { hover: false }
  }

  pixelDem() {
    return(this.props.pixelSize - 1)
  }

  backgroundColor() {
    if (!this.state.hover) {
      return this.props.color
    }
    else {
      return this.props.activeColor
    }
  }

  isHover(hover) {
    this.setState({ hover: hover })
  }

  render() {
    return (
      <div className="drawing-canvas__cell"
         style={{ width: this.pixelDem(),
                  height: this.pixelDem(),
                  backgroundColor: this.backgroundColor() }}
         onClick={() => this.props.handleCellClick(this.props.x, this.props.y)}
         onMouseEnter={() => this.isHover(true) }
         onMouseLeave={() => this.isHover(false) }

      >
      </div>
    )
  }
}

export default Cell;
