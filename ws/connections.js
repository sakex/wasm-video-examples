class SocketWrapper {
    static connections = {};
    static currentId = 0;
    static IO;

    constructor(socket, id) {
        this.socket = socket;
        this.id = id;

        this.feedSocket();
    }

    static addMember = (socket) => {
        const current = SocketWrapper.currentId++;
        const co = new SocketWrapper(socket, current);
        SocketWrapper.connections[current] = co;
        socket.emit("connectionId", current);
        SocketWrapper.emitMembers();
    };

    static emitMembers = () => {
        SocketWrapper.IO.emit("members", Object.keys(SocketWrapper.connections));
    };

    feedSocket = () => {
        this.socket.on("disconnect", () => {
            delete SocketWrapper.connections[this.id];
            SocketWrapper.emitMembers();
        });
    };
}

module.exports = {SocketWrapper};