const Card = require("./card");
const Interactions = require("./interactions");
const Hand = require("./hand");

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
    constructor(id) {
        this.id = id;
        this.players = [];
        this.deck = null;
        this.smallBlind = 5;
        this.bigBlind = 10;

        this.nextFunc = null;
        this.timeout = null;


        this.state = {
            dealer: -1,
            firstHighestPlayer: -1,
            currentPlayer: -1,
            bets: [],
            tokens: [],
            highestBet: -1,
            pot: [],
            flop: [],
            river: null,
            turn: null,
            playing: [],
            started: false,
            winner: [],
            timerStart: null,
            timerEnd: null
        };
    }

    addPlayer = newPlayer => {
        this.players.push(newPlayer);
        setTimeout(() => {
            this.players.forEach(player => {
                if (newPlayer.id !== player.id) {
                    player.socket.emit("newPlayer", newPlayer.id);
                }
            });
        }, 10000);
    };

    feedInteractions = () => {
        this.players.forEach((player, index) => new Interactions(this, player, index));
    };

    emitState = () => {
        this.players.forEach((player, index) => {
            player.socket.emit("state", this.state, index);
        });
    };

    start = async () => {
        this.feedInteractions();
        this.players.forEach(_ => {
            this.state.bets.push(0);
            this.state.tokens.push(10000);
            this.state.playing.push(true);
        });
        this.state.dealer = Math.round(Math.random() * this.players.length);
        this.state.firstHighestPlayer = (this.state.dealer + 2) % this.players.length;
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
        //console.log("start");
        this.state.started = true;
        this.emitState();
        this.blinds();
    };

    findNextPlayer = () => {
        let it = this.state.currentPlayer;
        for (; it < this.state.playing.length; ++it) if (this.state.playing) return it;
        for (it = 0; it < this.state.currentPlayer; ++it) if (this.state.playing) return it;
    };

    playerTurn = () => {
        clearTimeout(this.timeout);
        let inGame = 0;
        let index = 0;
        for (let it = 0; it < this.state.playing.length; ++it) { // Check if only one player left
            if (this.state.playing[it]) {
                index = it;
                inGame++;
                if (inGame === 2) break;
            }
        }
        if (inGame === 1) {
            this.winPot([{ player: this.players[index]}])
            return;
        }
        this.state.timerStart = new Date().getTime();
        this.state.timerEnd = this.state.timerStart + 10000;
        this.emitState();
        if (this.state.currentPlayer !== this.state.firstHighestPlayer) {
            this.state.currentPlayer = this.findNextPlayer();
            this.turnTable();
        } else {
            this.nextFunc();
        }
    };

    turnTable = () => {
        this.timeout = setTimeout(() => {
            if (this.state.bets[this.state.currentPlayer] < this.state.highestBet) {
                this.fold(this.state.currentPlayer);
            }
            this.playerTurn();
        }, 10000);
    };

    pay = (index, amount) => {
        const totalBet = amount + this.state.bets[index];
        if (amount === this.state.tokens[index] ||
            totalBet === this.state.highestBet ||
            totalBet > this.state.highestBet + this.smallBlind) {
            this.state.bets[index] += amount;
            this.state.tokens[index] -= amount;
            if (totalBet > this.state.highestBet) {
                this.state.highestBet = totalBet;
                this.state.firstHighestPlayer = index;
            }
        } else {
            this.players[index].socket.emit("err", "Amount raised too low");
        }
        this.emitState();
    };

    blinds = () => {
        this.dealerChange();
        const smallPos = (this.state.dealer + 1) % this.players.length;
        const bigPos = (this.state.dealer + 2) % this.players.length;
        this.pay(smallPos, this.smallBlind);
        this.pay(bigPos, this.bigBlind);
        this.state.flop = [];
        this.state.river = null;
        this.state.turn = null;
        this.distributeCards();
        this.nextFunc = this.flop;
        this.turnTable();
    };

    flop = () => {
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
        this.pot(0);
        for (let i = 0; i < 3; ++i) this.state.flop.push(this.deck.pop().serialize());
        this.emitState();
        this.nextFunc = this.river;
        this.turnTable();
    };

    river = () => {
        this.pot(1);
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
        this.state.river = this.deck.pop().serialize();
        this.emitState();
        this.nextFunc = this.turn;
        this.turnTable();
    };

    turn = () => {
        this.pot(2);
        this.state.turn = this.deck.pop().serialize();
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
        this.emitState();
        this.nextFunc = this.decideWinner;
        this.turnTable();
    };

    decideWinner = async () => {
        const cards = [...this.state.flop, this.state.river, this.state.turn];

        const hands = this.players.filter((player, index) => this.state.playing[index] && player)
            .map((player) => {
                const cardCp = [...cards, ...player.cards];
                const values = {};
                const colors = {};
                cardCp.forEach((card) => {
                    if (card.value in values) values[card.value]++;
                    else values[card.value] = 1;
                    if (card.color in colors) colors[card.color].push(card);
                    else colors[card.color] = [card];
                });
                return new Hand(values, colors);
            });

        const winners = Hand.compareHands(hands);
        this.winPot(winners);
    };

    pot = (turn) => {
        this.state.bets.forEach(bet => this.state.pot[turn] += bet);
        this.state.bets.fill(0);
        this.state.highestBet = 0;
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
    };

    winPot = (arr) => {
        // TODO

        let allPot = 0;
        for (let i = 0; i < 4; i++) {
            allPot += this.state.pot[i];
            this.state.pot[i] = 0;
        }
        const arrLength = arr.length;
        arr.forEach(winner => {
            return this.state.tokens[winner.player.id] += parseInt(allPot / arrLength);
        })
        console.log("winner");
        this.blinds();
    };

    distributeCards = () => {
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
            player.cards = toSend[index];
            player.socket.emit("cards", toSend[index]);
        });
    };

    dealerChange = () => {
        this.state.bets = [];
        this.state.playing = [];
        this.players.forEach(_ => {
            this.state.bets.push(0);
            this.state.playing.push(true);
        });
        this.state.dealer = (this.state.dealer + 1) % this.players.length;
        this.state.firstHighestPlayer = (this.state.dealer + 2) % this.players.length;
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
    };

    // TODO: check... all in one function called with different params
    check = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.state.bets[this.state.currentPlayer] === this.state.highestBet) {
            //this.state.bets[this.state.currentPlayer] = this.state.highestBet;
            this.playerTurn();
        }
    };

    call = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.state.bets[this.state.currentPlayer] < this.state.highestBet &&
            this.state.highestBet - this.state.bets[this.state.currentPlayer] <= this.state.tokens[this.state.currentPlayer]) {
            console.log("follow is valid");
            this.state.bets[this.state.currentPlayer] = this.state.highestBet;
            this.state.tokens[this.state.currentPlayer] -= (this.state.highestBet + this.state.bets[this.state.currentPlayer]);
            this.playerTurn();
        }
    };

    raise = (player, raise) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            raise + this.state.bets[this.state.currentPlayer] >= this.state.highestBet &&
            raise <= this.state.tokens[this.state.currentPlayer]) {
            console.log("raise is valid");
            this.state.bets[this.state.currentPlayer] += raise;
            this.state.tokens[this.state.currentPlayer] -= raise;
            this.state.highestBet = this.state.bets[this.state.currentPlayer];
            this.state.firstHighestPlayer = this.state.currentPlayer;
            this.playerTurn();
        }
    };

    fold = (index) => {
        if (index === this.state.currentPlayer) {
            console.log("pass is valid");
            this.state.playing[this.state.currentPlayer] = false;
            this.playerTurn();
        }
    };
}

module.exports = Game;

