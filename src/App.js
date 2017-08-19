import React, { Component } from 'react';
import logo from './logo.svg';
import DrawingCanvas from './DrawingCanvas';
import './App.css';
import SizeChooser from './SizeChooser';
import ColorPicker from './ColorPicker';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSizeUpdate = this.handleSizeUpdate.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
    this.handleChooseColor = this.handleChooseColor.bind(this)

    let board = Array(30).fill('').map(x => Array(30).fill(''))

    this.state = { boardLength: 30,
                   pixelSize: 30,
                   scale: 1,
                   board: board,
                   color: 'red' }
  }

  handleSizeUpdate(newScale)  {
    this.setState({ scale: newScale })
  }

  handleCellClick(x,y) {
    let tmpboard = this.state.board

    if (this.state.color == tmpboard[x][y]) {
      tmpboard[x][y] = ''
    }
    else {
      tmpboard[x][y] = this.state.color
    }

    this.setState({ board: tmpboard })
  }

  handleChooseColor(color) {
    this.setState({ color: color })
  }

  render() {
    return (
      <div>
        <SizeChooser value={this.state.scale }
                     handleSizeUpdate={this.handleSizeUpdate} />
        <span> { this.state.scale} </span>
        <ColorPicker handleChooseColor={ this.handleChooseColor }/>
        <DrawingCanvas boardLength={this.state.boardLength}
                       board={ this.state.board }
                       pixelSize={this.state.pixelSize}
                       scale={ this.state.scale }
                       handleCellClick={ this.handleCellClick }
                       activeColor= { this.state.color }/>
      </div>
    );
  }
}

export default App;
