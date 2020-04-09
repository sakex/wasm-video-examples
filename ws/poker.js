class Poker {
    static players = new Set();
    //chaque joueur a des cartes, tokens, bet, proba
    static maxPlayer = 3;
    static startDate = new Date();
    static actualDate = new Date();
    static turnDate = new Date();
    static turnSeconds;
    static turnSet = 0;         //player's turn
    static maxTurnSeconds = 15;    //seconds per turn


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
                Poker.startDate = new Date();
                //start with the first player in the Set
                Poker.turnId = Poker.players[Poker.turnSet];
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

//Poker.players.forEach(player => console.log(player.id));

class Cards{
    // 1 is As, .., 11 is Jack, 12 is Queen, 13 is King
    let number = new Set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
    //0 is Spades, 1 is Heart, 2 is Diamond, 3 is Clubs
    let color = Set(0, 1, 2, 3);
}

class Player{
    let tokens = 1000;
    let bet = 0;
    let cards = [Cards, Cards];
}

module
    .exports = Poker;
