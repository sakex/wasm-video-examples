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
            .on("pass", (raise) => {
                //to give up we change the bets to -1 and he will be skipped automatically
                this.game.fold(this.player, raise);
            })
            .on("follow", () => {
                this.game.call(this.player);
            })
            .on("raise", () => {
                this.game.raise(this.player);
            });
    };

}
module.exports = Interactions;