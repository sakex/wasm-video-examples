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
        this.bets = new Array(this.players.length);
        this.tokens = new Array(this.players.length).fill(10000);
        this.smallBlind = 5;
        this.bigBlind = 10;

        const firstDealer = Math.round(Math.random() * this.players.length);

        this.state = {
            dealer: firstDealer,
            firstHighestPlayer: (firstDealer + 2) % this.players.length,
            currentPlayer: (firstDealer + 3) % this.players.length,
            bets: this.bets,
            tokens: this.tokens,
            highestBet: -1,
            pot: [],
            flop: [],
            river: -1,
            turn: -1,
            playing: new Array(this.players.length)
        }
    }

    addPlayer = player => {
        this.players.push(player);
    }

    feedInteractions = () => this.players.forEach(player => new Interactions(this, player));

    emitState = () => {
        this.players.forEach((player, index) => {
            player.socket.emit("state", this.state, index);
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
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.bets[this.state.currentPlayer] === this.state.highestBet) {
            console.log("check is valid")
            //this.bets[this.state.currentPlayer] = this.state.highestBet;
            this.nextPlayer();
        }
    }

    call = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.bets[this.state.currentPlayer] < this.state.highestBet &&
            this.state.highestBet - this.bets[this.state.currentPlayer] <= this.tokens[this.state.currentPlayer]) {
            console.log("follow is valid")
            this.bets[this.state.currentPlayer] = his.state.highestBet;
            t
            this.tokens[this.state.currentPlayer] -= (this.state.highestBet + this.bets[this.state.currentPlayer]);
            this.nextPlayer();
        }
    }

    raise = (player, raise) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            raise + this.bets[this.state.currentPlayer] >= this.state.highestBet &&
            raise <= this.tokens[this.state.currentPlayer]) {
            console.log("raise is valid")
            this.bets[this.state.currentPlayer] += raise;
            this.tokens[this.state.currentPlayer] -= raise;
            this.state.highestBet = this.bets[this.state.currentPlayer];
            this.state.firstHighestPlayer = this.state.currentPlayer;
            this.nextPlayer();
        }
    }

    pass = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer) {
            console.log("pass is valid")
            this.state.playing[this.state.currentPlayer] = false;
            this.nextPlayer();
        }
    }

    nextPlayer = () => {
        //skip a player that passed by checking if it's bet === -1

        // TODO: Ca ne peut pas marcher tout ca
        let i = 1;
        while (!this.state.playing[this.state.currentPlayer + i] &&
        (this.state.currentPlayer + i) % this.players.length !== this.state.currentPlayer) {
            i++;
        }
        this.state.currentPlayer = (this.state.currentPlayer + i) % this.players.length;
        this.emitState();
    }

    turnTable = async () => {
        while (this.state.currentPlayer !== this.state.firstHighestPlayer) {
            //console.log("your are still in blinds fct")
            //setTimeout(this.nextFunction, 1000);
            //clearTimeout(this.timeout); this.nexFunction()

            this.emitState();
            await Game.awaitTimer(300);
        }
    }

    blinds = async () => {
        this.state.playing.fill(true);
        this.bets.fill(0);
        this.bets[(this.state.dealer + 1) % this.players.length] = this.smallBlind;
        this.bets[(this.state.dealer + 2) % this.players.length] = this.bigBlind;
        this.tokens[(this.state.dealer + 1) % this.players.length] -= this.smallBlind;
        this.tokens[(this.state.dealer + 2) % this.players.length] -= this.bigBlind;
        this.state.highestBet = Math.max(...this.bets);
        console.log("blinds are done");
    }

    flop = async () => {
        this.bets.forEach(bet => this.state.pot[0] += bet);
        this.bets.fill(0);
        this.state.flop[0].push([this.deck.pop().serialize()]);
        this.state.flop[1].push([this.deck.pop().serialize()]);
        this.state.flop[2].push([this.deck.pop().serialize()]);
    }

    river = async () => {
        this.bets.forEach(bet => this.state.pot[1] += bet);
        this.bets.fill(0);
        this.state.river.push([this.deck.pop().serialize()]);
    }

    turn = async () => {
        this.bets.forEach(bet => this.state.pot[2] += bet);
        this.bets.fill(0);
        this.state.turn.push([this.deck.pop().serialize()]);
    }

    checkValidPlayers = async () => {
        this.players.forEach((player, index) => {
            if (this.tokens[this.state.currentPlayer] <= 0) {
                this.players.delete(player);
            }
        });
    }

    playRound = async () => {
        await this.blinds();
        await this.distributeCards();
        await this.turnTable();
        await this.flop();
        await this.turnTable();
        await this.river();
        await this.turnTable();
        await this.turn();
        await this.turnTable();
        //await this.decideWinner();
        //await this.distributeMoney();
        await this.checkValidPlayers();
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
        await Game.awaitTimer(1000);
    };
}

module.exports = Game;

