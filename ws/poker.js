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

            for (let player of Poker.players) {
                console.log("player is: ", player);
                if (player === this.id) {
                    console.log("already in");
                } else {
                    if (Poker.players.size < Poker.maxPlayer) {

                        console.log("welcome to the table");
                        Poker.players.add(this.id);
                        console.log(Poker.players);
                    } else {
                        console.log("table already full");
                    }
                }
            }


        })
            .on("leave", () => {
                console.log("sad to see you leave");
                Poker.players.delete(this.id);
                console.log(Poker.players);
            });
    };
}

/*
emitToAll = () => {
    this.players.forEach(player => player.socket.emit("msg", args);
}
 */


module
    .exports = Poker;
