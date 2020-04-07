class Poker {
    static players = new Set();
    static maxPlayer = 9;


    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.feedSocket();
    }

    //in here change the events
    /* when serveur receives message what to do
    *
    * */
    feedSocket = () => {

        this.socket.on("join", () => {
            console.log(" Your id is: ", this.id);
            if (Poker.players.size <= Poker.maxPlayer) {
                /* doesn't work...
                let player;
                for(player in Poker.players){

                    if (player === this.id) {
                        console.log("already in");
                        break;
                    }
                }
                 */
                console.log("welcome to the table");
                Poker.players.add(this.id);
                console.log(Poker.players);
            } else {
                console.log("table already full");
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
