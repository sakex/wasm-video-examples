class Interactions {

    constructor(player, socket, id, state) {
        this.id = id;
        this.socket = socket;
        this.check = false;
        this.pass = false;
        this.checkOrPass = false;
        this.follow = false;
        this.raise = state.max;
        this.feedSocket();
    }

    feedSocket = () => {

        this.socket.on("check", () => {

        })
            .on("checkOrPass", () => {
                //Poker.changePlayer();
            })
            .on("pass", () => {

            })
            .on("follow", () => {

            })
            .on("raise", () => {

            });

    };

}
module.exports = Interactions;