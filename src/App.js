import React, { Component } from 'react';
import logo from './logo.svg';
import DrawingCanvas from './DrawingCanvas';
import './App.css';
import SizeChooser from './SizeChooser';
import ColorPicker from './ColorPicker';
// import { subscribeToSocket, sendPixelPlace, newPixel } from './api.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSizeUpdate = this.handleSizeUpdate.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
    this.handleChooseColor = this.handleChooseColor.bind(this)

    let board = this.makeBoard()

    this.state = { scale: 1,
                   board: board,
                   color: 'red' }

    // subscribeToSocket((e) => this.rehydrateBoard(e))
    // newPixel((x,y,z) => this.handleCellClick(x,y,z, true))
  }

  makeBoard = () => (
    Array(20).fill('').map(x => Array(20).fill(''))
  )

  handleSizeUpdate(newScale)  {
    this.setState({ scale: newScale })
  }

  handleCellClick(x,y,specificColor, remote) {
    let tmpboard = JSON.parse(JSON.stringify(this.state.board))

    tmpboard[x][y] = this.state.color
    this.setState({ board: tmpboard })
  }

  handleChooseColor(color) {
    this.setState({ color: color })
  }

  // rehydrateBoard = (board) => {
  //   let newBoard = this.makeBoard()

  //   for(let i = 0; i < 20; i++) {
  //     for(let j = 0; j < 20; j++) {
  //       newBoard[i][j] = this.getColor(board[(i + 20 * j)])
  //     }
  //   }

  //   this.setState({ board: newBoard })
  // }

  // getColor = (colorIndex) => {
  //   let colors = ['', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']
  //   return colors[colorIndex]
  // }

  // handleCellClick(x,y,specificColor, remote) {
  //   let tmpboard = JSON.parse(JSON.stringify(this.state.board))

  //   let color = ''

  //   if (specificColor) {
  //     console.log(specificColor)
  //     color = specificColor
  //   }
  //   else if (this.state.color != tmpboard[x][y]) {
  //     color = this.state.color
  //   }

  //   tmpboard[x][y] = color

  //   if (!remote) {
  //     sendPixelPlace(x,y,color)
  //   }
  //   this.setState({ board: tmpboard })
  // }

  render() {
    return (
      <div>
        <div className="controls-panel">
          <SizeChooser value={this.state.scale }
                       handleSizeUpdate={this.handleSizeUpdate} />
          <ColorPicker handleChooseColor={ this.handleChooseColor }/>
        </div>
        <DrawingCanvas board={ this.state.board }
                       scale={ this.state.scale }
                       handleCellClick={ this.handleCellClick }
                       activeColor= { this.state.color }/>
      </div>
    );
  }
}

export default App;
