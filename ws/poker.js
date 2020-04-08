class Poker {
    static players = new Set();
    static maxPlayer = 3;
    static startDate = new Date();
    static turnDate = new Date();
    static actualDate = new Date();
    static seconds;


    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.feedSocket();
        this.timeSeconds();

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

    timeSeconds = () => {
        Poker.seconds = setInterval(function () {
            Poker.actualDate = new Date();
            Poker.seconds = (Poker.actualDate.getTime() - Poker.turnDate.getTime()) / 1000;
            //console.log(Poker.seconds);
        }, 1000);

    };

}

//Poker.players.forEach(player => console.log(player.id));

module
    .exports = Poker;
