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

    constructor(players, socket, id) {
        this.socket = socket;
        this.id = id;
        this.players = players;
        this.deck = null;
        this.bets = new Array(players.length).fill(0);
        this.currentInteractions = [];

        const firstDealer = Math.round(Math.random() * this.players.length);

        this.state = {
            currentPlayer: (firstDealer + 2) % this.players.length,
            dealer: firstDealer,
            bets: this.bets,
            currentInteraction: this.currentInteractions[(firstDealer + 2) % this.players.length]
        };
    }

    feedInteractions = () => this.players.forEach(player => {
        const interaction = new Interactions(this, player, this.socket, this.id, this.state);
        this.currentInteractions.push(interaction);
    });

    emitState = () => {
        this.players.forEach(player => player.socket.emit("state", this.state));
    };

    start = async () => {
        //console.log("start");
        this.feedInteractions()


        while (this.players.length > 0) {
            await this.playRound();
            return;
        }
    }

    playRound = async () => {
        await this.distributeCards();
        await this.emitState();
        /*
        * await this.blinds();
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