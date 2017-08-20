import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

export const subscribeToSocket = (cb) => {
  socket.on('buf', test => cb(test, 4))
}

export const sendPixelPlace = (x,y,color) => {
  socket.emit('pixel_placed', x,y,color)
}

export const newPixel = (cb) => {
  socket.on('new_pixel', (x,y,color) => cb(x,y,color))
}
