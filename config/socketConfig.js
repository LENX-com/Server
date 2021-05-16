let { STATIC_CHANNELS } = require('../utils/channels');

exports.setSocket = (io) => {
    io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
        console.log('New User Connected');
        socket.emit('connection', null);
        socket.on('channel-join', id => {
            console.log('channel join', id);
            STATIC_CHANNELS.forEach(c => {
                if (c.id === id) {
                    if (c.sockets.indexOf(socket.id) == (-1)) {
                        c.sockets.push(socket.id);
                        c.participants++;
                        io.emit('channel', c);
                    }
                } else {
                    let index = c.sockets.indexOf(socket.id);
                    if (index != (-1)) {
                        c.sockets.splice(index, 1);
                        c.participants--;
                        io.emit('channel', c);
                    }
                }
            });
    
            return id;
        });
        
        socket.on('send-message', message => {
            io.emit('message', message);
        });
    
        socket.on('disconnect', () => {
            STATIC_CHANNELS.forEach(c => {
                let index = c.sockets.indexOf(socket.id);
                if (index != (-1)) {
                    c.sockets.splice(index, 1);
                    c.participants--;
                    io.emit('channel', c);
                }
            });
        });
    
    });
}