class Poker {
    static players = new Set();
    static maxPlayer = 3;
    static startDate = new Date();
    static turnDate = new Date();
    static actualDate = new Date();
    static seconds;
    static turnSet = 0;         //player's turn
    static maxTurnSeconds = 15;    //seconds per turn


    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.feedSocket();
        this.turnSeconds();
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
                Poker.turnDate = new Date();
            })
            .on("...", () => {

            })
            .on("...", () => {

            })
            .on("...", () => {

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
    turnSeconds = () => {
        Poker.seconds = setInterval(function () {
            Poker.actualDate = new Date();
            Poker.seconds = (Poker.actualDate.getTime() - Poker.turnDate.getTime()) / 1000;
            //console.log(Poker.seconds);

            if(Poker.seconds < Poker.maxTurnSeconds){
                //this.changePlayer();
            }

        }, 1000);
    };

    //emit data to the player who has to choose
    emitToActualPlayer = () => {
        //Poker.players[Poker.turnSet].socket.emit("turnPlayer");
    };

    changePlayer = () => {
        if (Poker.turnSet < Poker.players.size) {
            Poker.turnSet += 1;
        } else {
            Poker.turnSet = 0;
        }

    };

}

//Poker.players.forEach(player => console.log(player.id));

module
    .exports = Poker;
