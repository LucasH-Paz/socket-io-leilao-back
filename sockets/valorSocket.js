const Items = require('../models/itemModel');

module.exports = (io) => {
  io.on('connection', (socket) => {
    // console.log(`Cliente ${socket.id} acabou de entrar`);
  
    socket.on('increaseValue', async ({ id }) => {
      const item = await items.updateById(id);
      
      io.emit('refreshCurrentValue', item);
  
      // socket.emit -> manda apenas para quem emitiu
      // io.emit -> manda para todos
      // socket.broadcast.emit -> manda para todos exceto quem emitiu.
    })
  });  
}