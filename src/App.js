import React, { Component } from 'react';
import logo from './logo.svg';
import DrawingCanvas from './DrawingCanvas';
import './App.css';
import SizeChooser from './SizeChooser';
import ColorPicker from './ColorPicker';
import { subscribeToSocket, sendPixelPlace, newPixel } from './api.js'

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

    subscribeToSocket((e) => this.rehydrateBoard(e))
    newPixel((x,y,z) => this.handleCellClick(x,y,z, true))
  }

  rehydrateBoard = (board) => {
    let newBoard = Array(30).fill('').map(x => Array(30).fill(''))

    for(let i = 0; i < 30; i++) {
      for(let j = 0; j < 30; j++) {
        newBoard[i][j] = this.getColor(board[(i + 30 * j)])
      }
    }

    this.setState({ board: newBoard })
  }

  getColor = (colorIndex) => {
    let colors = ['', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']
    return colors[colorIndex]
  }

  handleSizeUpdate(newScale)  {
    this.setState({ scale: newScale })
  }

  handleIncomingColor(x,y,color) {
    let tmpboard = this.state.board
    tmpboard[x][y] = color
    this.setState({ board: tmpboard })

  }

  handleCellClick(x,y,specificColor, remote) {
    let tmpboard = this.state.board

    let color = ''

    if (specificColor) {
      console.log(specificColor)
      color = specificColor
    }
    else if (this.state.color != tmpboard[x][y]) {
      color = this.state.color
    }

    tmpboard[x][y] = color

    if (!remote) {
      sendPixelPlace(x,y,color)
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
