// TODO: require logger
var logger = {
    debug: console.log
}

const SESSION = "TWO_PEP_SESSION";

// naively maintain all sockets in a single server
// so the this is a massive table containing many user info
// should refer to node.js cluster support on 
// https://socket.io/docs/using-multiple-nodes/
const userInfo = new Map();

function initSocketService(user, socket) {
    // TODO: initialize socket
    console.assert(!userInfo.has(user));
    userInfo.set(user, {
        socket: socket,
    });

    // TODO: implementation:
    socket.on("message", (user, receiver, message) => {
        // rough impl
        
        // TODO: 1. write to DB: call back wrapping the following

        // 2. send to the receiver
        // TODO: handle offline case
        const receiverSocket = userInfo.get(receiver).socket;
        receiverSocket.emmit("message", message, (ack) => {
            // TODO: 3. ack to the sender
        });
    });

    // TODO: implementation: 0. to determine the rest arguments (pagination? time ranges?)
    socket.on("retrieval", (user, receiver, ...args) => {

    })

    socket.on("disconnect", function() {
        logger.debug("a user quitted");
    })
}

// TODO: whether do authentication or not?
// security: a user should have access to only his bucket of info
module.exports = function(io) {
    io.on("connection", function(socket) {
        logger.debug("a user connected");

        // TODO: authenticate
        socket.on("auth", (...args) => {
            // server-side firebase administration
            const isAuthenticated = true;

            if (isAuthenticated) {
                initSocketService(user, socket);
            } else {
                socket.disconnect();
            }
        })
    });
}