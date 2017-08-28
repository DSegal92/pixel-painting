import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = { hover: false }
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
         style={{ backgroundColor: this.backgroundColor() }}
         onClick={() => this.props.handleCellClick(this.props.x, this.props.y)}
         onMouseEnter={() => this.isHover(true) }
         onMouseLeave={() => this.isHover(false) }

      >
      </div>
    )
  }
}

export default Cell;
