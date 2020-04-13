const Game = require("./game");

class Lobby {

    static players = new Set();
    static game = [];
    static maxPlayer = 10;

    constructor(socket, id) {

        this.socket = socket;
        this.id = id;
        this.feedSocket();
    }

    feedSocket = () => {


        this.socket.on("join", () => {
            console.log(" Your id is: ", this.id);
            console.log(" Size is: ", Lobby.players.size);

            if (!Lobby.players.has(this) && Lobby.players.size < Lobby.maxPlayer) {
                Lobby.players.add(this);
            }
        })
            .on("leave", () => {
                Lobby.players.delete(this);
            })
            .on("start", () => {
                //console.log(Lobby.players, "polo");
                const playerArr = [...Lobby.players];
                const game = new Game(playerArr);
                Lobby.game.push(game);
                game.start();
                //throw new Error("message")
            });

    };
}


module.exports = Lobby;
