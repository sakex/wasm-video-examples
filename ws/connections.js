const Poker = require("./poker/poker");

class SocketWrapper {
    static connections = {};
    static currentId = 0;
    static IO;

    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.poker = new Poker(this.socket, this.id);
        this.feedSocket();
    }

    emit = (message, data) => {
        this.socket.emit(message, data);
    };

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
        this.socket.on("call", ({id, selfId, data}) => {
            SocketWrapper.connections[id].emit("call", {id, selfId, data});
        })
            .on("answer", ({id, selfId, data}) => {
                SocketWrapper.connections[id].emit("answer", {id, selfId, data});
            })
            .on("candidate", ({id, candidate}) => {
                SocketWrapper.connections[id].emit("candidate", {id, candidate});

            })
            .on("disconnect", () => {
                delete SocketWrapper.connections[this.id];
                SocketWrapper.emitMembers();
            });
    };
}

module.exports = {SocketWrapper};