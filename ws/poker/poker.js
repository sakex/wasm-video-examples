const Game = require("./game");

/*
class Poker {

    static players = new Set();
    //chaque joueur a des cartes, tokens, bet, proba
    static maxPlayer = 3;
    static games = [];

    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.feedSocket();
        this.turnTime();
        this.emitToActualPlayer();

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
            })
            .on("start", () => {
                const playerArr = [...Poker.players];
                const game = new Game(playerArr);
                Poker.games.push(game);
                game.start();
            })
            .on("check", () => {
                Poker.changePlayer();
            })
            .on("pass", () => {

            })
            .on("follow", () => {

            })
            .on("raise", () => {

            })
            .on("...", () => {

            });

    };
    emitToAll = () => {
        Poker.players.forEach(player => {
            //player.socket.emit("essential", args)
        });

    };

    //seconds in  the player's turn
    turnTime = () => {
        Poker.turnSeconds = setInterval(function () {
            Poker.actualDate = new Date();
            Poker.turnSeconds = (Poker.actualDate.getTime() - Poker.turnDate.getTime()) / 1000;
            console.log(Poker.turnSeconds);

            if(Poker.turnSeconds > Poker.maxTurnSeconds){
                console.log("Change of player");
                Poker.changePlayer();
            }

        }, 1000);
    };

    //emit data to the player who has to choose
    emitToActualPlayer = () => {
        console.log("time remaining: ", Poker.maxTurnSeconds - Poker.turnSeconds)
        //Poker.players.values[Poker.turnSet].socket.emit("turnPlayer", Poker.turnSeconds);
    };

    static changePlayer = () => {
        if (Poker.turnSet < Poker.players.size) {
            Poker.turnSet += 1;
        } else {
            Poker.turnSet = 0;
        }
        Poker.turnDate = new Date();
        //CHANGE HERE
        //Poker.players.values[Poker.turnSet].socket.emit("turnPlayer", Poker.turnSeconds);

    };

}


module.exports = Poker;

 */
