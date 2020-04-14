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
}

class Game {
    static awaitTimer = (timer) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timer)
            }, timer);
        })
    }

    constructor(players) {
        this.players = players;
        this.deck = null;
        this.bets = new Array(players.length).fill(0);
        this.smallBlind = 5;
        this.bigBlind = 10;

        const firstDealer = Math.round(Math.random() * this.players.length);

        this.state = {
            dealer: firstDealer,
            currentPlayer: (firstDealer + 3) % this.players.length,
            highestBet: this.bets.max,
            firstHighestPlayer: (firstDealer + 2) % this.players.length,
            bets: this.bets
            //display to each player who he is compared to currentPlayer
        };
    }

    feedInteractions = () => this.players.forEach(player => new Interactions(this, player));

    emitState = () => {
        //console.log(this.state)
        this.players.forEach((player, index) => {
            player.socket.emit("state", this.state);
            player.socket.emit("index", index);
        });
    };

    start = async () => {
        //console.log("start");
        this.feedInteractions()
        while (this.players.length > 0) {
            await this.playRound();
            return;
        }
    }

    check = (player) => {
        console.log("check")
        if (player === this.state.currentPlayer){
            this.bets[this.state.currentPlayer] = this.state.highestBet;
            this.nextPlayer();
        }
    }

    nextPlayer = () => {
        this.state.currentPlayer = (this.state.currentPlayer++) % this.players.length

    }

    blinds = async () => {
        while (this.state.currentPlayer !== this.state.firstHighestPlayer)
        {
            this.emitState();
        }

    }

    playRound = async () => {
        this.bets[(this.state.dealer+1) % this.players.length] = this.smallBlind;
        this.bets[(this.state.dealer+2) % this.players.length] = this.bigBlind;
        await this.distributeCards();
        //await this.emitState();
        await this.blinds();
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
    }

    distributeCards = async () => {
        const deck = [];
        for (let i = 2; i < 14; ++i) {
            Card.colors.forEach(color => deck.push(new Card(i, color)));
        }
        this.deck = shuffleArray(deck);
        const toSend = [];
        this.players.forEach(_ => {
            toSend.push([this.deck.pop().serialize()])
        });
        toSend.forEach(arr => {
            arr.push(this.deck.pop().serialize())
        });
        this.players.forEach((player, index) => {
            player.socket.emit("cards", toSend[index])
        });
        await Game.awaitTimer(10000);
    };
}

module.exports = Game;