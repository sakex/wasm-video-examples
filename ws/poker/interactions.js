class Interactions {

    constructor(game, player) {
        //game & player
        this.player = player;
        this.game = game;
        this.socket = player.socket;
        this.feedSocket();
    }

    feedSocket = () => {

        this.socket.on("check", () => {
            //game dans check
            this.game.check(this.player);
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