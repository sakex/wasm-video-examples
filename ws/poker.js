class Poker {
    static players = new Set();
    static maxPlayer = 3;


    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.feedSocket();
    }

    feedSocket = () => {

        this.socket.on("join", () => {
            console.log(" Your id is: ", this.id);
            console.log(" Size is: ", Poker.players.size);

            if (!Poker.players.has(this) && Poker.players.size < Poker.maxPlayer) {
                Poker.players.add(this);
            }
        })
            .on("leave", () => {
                Poker.players.delete(this);
            });
    };
}
//Poker.players.forEach(player => console.log(player.id));
/*
emitToAll = () => {
    this.players.forEach(player => player.socket.emit("msg", args);
}
 */


module
    .exports = Poker;
