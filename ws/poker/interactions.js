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
                //to give up we change the bets to -1 and he will be skipped automatically
                this.game.bets[this.game.state.currentPlayer] = -1;
                this.game.nextPlayer();
            })
            .on("follow", () => {
                this.game.follow(this.player);
            })
            .on("raise", () => {

            });
    };

}
module.exports = Interactions;