// TODO: require logger
var logger = {
    debug: console.log
}

const SESSION = "TWO_PEP_SESSION";

module.exports = function(io) {
    io.on("connection", function(socket) {
        logger.debug("a user connected");

        // handlers

        socket.on("disconnect", function() {
            logger.debug("a user quitted");
        })
    });

    
}