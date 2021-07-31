let { STATIC_CHANNELS } = require('../utils/channels');
const Chat = require('../models/chat');
const { storeMedia } = require('../helpers/mediaHandler');

exports.setSocket = (io) => {
    // io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
    //     console.log('New User Connected');

    //     socket.emit('connection', null);

    //     socket.on('channel-join', id => {
    //         console.log('channel join', id);

    //         STATIC_CHANNELS.forEach(c => {
    //             if (c.id === id) {
    //                 if (c.sockets.indexOf(socket.id) == (-1)) {   
    //                     c.sockets.push(socket.id);
    //                     c.participants++;
    //                     io.emit('channel', c);
    //                 }
    //             } else {
    //                 let index = c.sockets.indexOf(socket.id);
    //                 if (index != (-1)) {
    //                     c.sockets.splice(index, 1);
    //                     c.participants--;
    //                     io.emit('channel', c);
    //                 }
    //             }
    //         });
    
    //         return id;
    //     });
        
        // socket.on('send-message', message => {

        //     console.log(message);  
            
        //     let chat = new Chat({
        //         messageID: message.id,
        //         senderID: message.senderId,
        //         receiverID: message.channel_id,
        //         message: message.text,
        //         senderName: message.senderName
        //     });
        
        //     chat.save((err, result) => {
        //         if (err) throw err;
        //         io.emit('message', message);
        //     })
            
        // });

//         socket.on('send-audio', audio => {
//             storeMedia(audio, io);   
//         });

//         socket.on('send-media', media => {
//             storeMedia(media, io);
//         });

//         socket.on('disconnect', () => {
//             STATIC_CHANNELS.forEach(c => {
//                 let index = c.sockets.indexOf(socket.id);
//                 if (index != (-1)) {
//                     c.sockets.splice(index, 1);
//                     c.participants--;
//                     io.emit('channel', c);
//                 }  
//             });
//         });
    
//     });
// }

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    console.log("user is been added")
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log(user, senderId, receiverId, text)
    io.emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
})
}