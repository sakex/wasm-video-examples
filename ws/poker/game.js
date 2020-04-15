const Card = require("./card");
const Interactions = require("./interactions");

const shuffleArray = (arr) => {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
};

class Game {
    static awaitTimer = (timer) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timer);
            }, timer);
        });
    };

    constructor() {
        this.players = [];
        this.deck = null;
        this.bets = new Array(this.players.length);
        this.smallBlind = 5;
        this.bigBlind = 10;

        const firstDealer = Math.round(Math.random() * this.players.length);

        this.state = {
            dealer: firstDealer,
            firstHighestPlayer: (firstDealer + 2) % this.players.length,
            currentPlayer: (firstDealer + 3) % this.players.length,
            bets: this.bets,
            highestBet: -1
        };
    }

    addPlayer = newPlayer => {
        this.players.push(newPlayer);
        setTimeout(() => {
            this.players.forEach(player => {
                if(newPlayer.id !== player.id) {
                    player.socket.emit("newPlayer", newPlayer.id);
                }
            });
        }, 10000);
    };

    feedInteractions = () => {
        this.players.forEach(player => new Interactions(this, player));
    };

    emitState = () => {
        this.players.forEach((player, index) => {
            player.socket.emit("state", this.state, index);
        });
    };

    start = async () => {
        //console.log("start");
        this.feedInteractions();
        while (this.players.length > 0) {
            await this.playRound();
            return;
        }
    };

    check = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.bets[this.state.currentPlayer] === this.state.highestBet) {
            console.log("check is valid");
            //this.bets[this.state.currentPlayer] = this.state.highestBet;
            this.nextPlayer();
        }
    };

    follow = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.bets[this.state.currentPlayer] < this.state.highestBet) {
            console.log("follow is valid");
            this.bets[this.state.currentPlayer] = this.state.highestBet;
            this.nextPlayer();
        }
    };

    raise = (player, raise) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.bets[this.state.currentPlayer] < this.state.highestBet &&
            raise > this.state.highestBet) {
            console.log("raise is valid");
            this.bets[this.state.currentPlayer] = raise;
            this.state.highestBet = raise;
            this.state.firstHighestPlayer = this.state.currentPlayer;
            this.nextPlayer();
        }
    };

    pass = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer) {
            console.log("pass is valid");
            this.bets[this.state.currentPlayer] = -1;
            this.nextPlayer();
        }
    };

    nextPlayer = () => {
        //skip a player that passed by checking if it's bet === -1

        // TODO: Ca ne peut pas marcher tout ca
        const i = 1;
        while (this.bets[this.state.currentPlayer + i] === -1 &&
        (this.state.currentPlayer + i) % this.players.length !== this.state.currentPlayer) {
            i++;
        }
        this.state.currentPlayer = (this.state.currentPlayer + i) % this.players.length;
        this.emitState();
    };

    turnTable = async () => {
        while (this.state.currentPlayer !== this.state.firstHighestPlayer) {
            //console.log("your are still in blinds fct")
            this.emitState();
            await Game.awaitTimer(300);
        }

    };

    blinds = async () => {
        this.bets.fill(0);
        this.bets[(this.state.dealer + 1) % this.players.length] = this.smallBlind;
        this.bets[(this.state.dealer + 2) % this.players.length] = this.bigBlind;
        this.state.highestBet = Math.max(...this.bets);
        console.log("blinds are done");
    };

    playRound = async () => {
        await this.blinds();
        await this.distributeCards();
        //await this.emitState();
        await this.turnTable();
        /*
        *
        * this.playersInteractions();
        * this.flop();
        * this.playersInteractions();
        * this.river();
        * this.playersInteractions();
        * this.turn();
        * this.playersInteractions();
        * this.decideWinner();
        * this.distributeMoney();
        * */
        console.log("end of playRound");
    };

    distributeCards = async () => {
        const deck = [];
        for (let i = 2; i < 14; ++i) {
            Card.colors.forEach(color => deck.push(new Card(i, color)));
        }
        this.deck = shuffleArray(deck);
        const toSend = [];
        this.players.forEach(_ => {
            toSend.push([this.deck.pop().serialize()]);
        });
        toSend.forEach(arr => {
            arr.push(this.deck.pop().serialize());
        });
        this.players.forEach((player, index) => {
            player.socket.emit("cards", toSend[index]);
        });
        await Game.awaitTimer(1000);
    };
}

module.exports = Game;