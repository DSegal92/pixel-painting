const io = require('socket.io')();
const redis = require('redis'),

redisClient = redis.createClient({ return_buffers: true });

const canvas_name = 'pixels';

let colors = { red: 1, orange: 2, yellow: 3, green: 4, blue: 5, purple: 6, none: 0}

io.on('connection', (client) => {
  console.log("client subscribed")

  redisClient.get(new Buffer(canvas_name), function(err, reply) {
    client.emit('buf', new Uint8Array(reply, 4))
  });

  client.on('pixel_placed', function(x,y,color) {
    let offset = y * 30 + x
    let useColor = color
    if (useColor == '' || useColor == undefined) {
      useColor = 'none'
    }

    redisClient.send_command("bitfield",[canvas_name,'SET','u8','#'+offset,colors[useColor]])

    redisClient.get(new Buffer(canvas_name), function(err, reply) {
      client.broadcast.emit('new_pixel', x,y,color)
    });
  })

})

const port = 8000;
io.listen(port)
console.log('listening on port', port)
