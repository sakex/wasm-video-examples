class Interactions {

    constructor(game, player, index) {
        //game & player
        this.player = player;
        this.game = game;
        this.socket = player.socket;
        this.index = index;
        this.feedSocket();
    }

    feedSocket = () => {

        this.socket.on("raise", bet => {
            this.game.pay(this.index, bet);
        });
    };

}
module.exports = Interactions;