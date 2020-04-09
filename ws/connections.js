class SocketWrapper {
    static connections = {};
    static currentId = 0;
    static IO;

    constructor(socket, id) {
        this.socket = socket;
        this.id = id;

        this.feedSocket();
    }

    emit = (message, data) => {
        this.socket.emit(message, data);
    };

    static addMember = (socket) => {
        const current = SocketWrapper.currentId++;
        SocketWrapper.connections[current.toString()] = new SocketWrapper(socket, current);
        socket.emit("connectionId", current.toString());
        SocketWrapper.emitMembers();
    };

    static emitMembers = () => {
        SocketWrapper.IO.emit("members", Object.keys(SocketWrapper.connections));
    };

    feedSocket = () => {
        this.socket.on("call", ({id, senderId, data}) => {
            SocketWrapper.connections[id].emit("call", {id, senderId, data});
        })
            .on("answer", ({id, senderId, data}) => {
                SocketWrapper.connections[id].emit("answer", {id, senderId, data});
            })
            .on("candidate", ({id, senderId, candidate}) => {
                SocketWrapper.connections[id].emit("candidate", {id, senderId, candidate});
            })
            .on("disconnect", () => {
                delete SocketWrapper.connections[this.id];
                SocketWrapper.emitMembers();
            });
    };
}

module.exports = {SocketWrapper};