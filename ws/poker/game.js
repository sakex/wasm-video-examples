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

    constructor(id) {
        this.id = id;
        this.players = [];
        this.deck = null;
        this.smallBlind = 5;
        this.bigBlind = 10;


        this.state = {
            dealer: -1,
            firstHighestPlayer: -1,
            currentPlayer: -1,
            bets: [],
            tokens: [],
            highestBet: -1,
            pot: [],
            flop: [],
            river: -1,
            turn: -1,
            playing: [],
            started: false
        }
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
        this.players.forEach(player => new Interactions(this, player));
    };

    emitState = () => {
        this.players.forEach((player, index) => {
            player.socket.emit("state", this.state, index);
        });
    };

    start = async () => {
        this.players.forEach(_ => {
            this.state.bets.push(0);
            this.state.tokens.push(10000);
            this.state.playing.push(true);
        });
        this.state.dealer = Math.round(Math.random() * this.players.length);
        this.state.firstHighestPlayer = (this.state.dealer + 2) % this.players.length;
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
        //console.log("start");
        this.feedInteractions();
        this.state.started = true;
        this.emitState();
        while (this.players.length > 0) {
            await this.playRound();
            return;
        }
    };

    dealerChange = async () => {
        this.state.bets = [];
        this.state.playing = [];
        this.players.forEach(_ => {
            this.state.bets.push(0);
            this.state.playing.push(true);
        });
        this.state.dealer = (this.state.dealer + 1) % this.players.length;
        this.state.firstHighestPlayer = (this.state.dealer + 2) % this.players.length;
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
    }

    check = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.state.bets[this.state.currentPlayer] === this.state.highestBet) {
            //this.state.bets[this.state.currentPlayer] = this.state.highestBet;
            this.nextPlayer();
        }
    };

    call = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            this.state.bets[this.state.currentPlayer] < this.state.highestBet &&
            this.state.highestBet - this.state.bets[this.state.currentPlayer] <= this.state.tokens[this.state.currentPlayer]) {
            console.log("follow is valid")
            this.state.bets[this.state.currentPlayer] = this.state.highestBet;
            this.state.tokens[this.state.currentPlayer] -= (this.state.highestBet + this.state.bets[this.state.currentPlayer]);
            this.nextPlayer();
        }
    };

    raise = (player, raise) => {
        if (this.players.indexOf(player) === this.state.currentPlayer &&
            raise + this.state.bets[this.state.currentPlayer] >= this.state.highestBet &&
            raise <= this.state.tokens[this.state.currentPlayer]) {
            console.log("raise is valid")
            this.state.bets[this.state.currentPlayer] += raise;
            this.state.tokens[this.state.currentPlayer] -= raise;
            this.state.highestBet = this.state.bets[this.state.currentPlayer];
            this.state.firstHighestPlayer = this.state.currentPlayer;
            this.nextPlayer();
        }
    };

    fold = (player) => {
        if (this.players.indexOf(player) === this.state.currentPlayer) {
            console.log("pass is valid")
            this.state.playing[this.state.currentPlayer] = false;
            this.nextPlayer();
        }
    };

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
    };

    turnTable = async () => {
        while (this.state.currentPlayer !== this.state.firstHighestPlayer) {
            //console.log("your are still in blinds fct")
            //setTimeout(this.nextFunction, 1000);
            //clearTimeout(this.timeout); this.nexFunction()

            this.emitState();
            await Game.awaitTimer(300);
        }

    };

    blinds = async () => {
        this.state.bets[(this.state.dealer + 1) % this.players.length] = this.smallBlind;
        this.state.bets[(this.state.dealer + 2) % this.players.length] = this.bigBlind;
        this.state.tokens[(this.state.dealer + 1) % this.players.length] -= this.smallBlind;
        this.state.tokens[(this.state.dealer + 2) % this.players.length] -= this.bigBlind;
        this.state.highestBet = Math.max(...this.state.bets);
        console.log("blinds are done");
    };

    pot = async (turn) => {
        this.state.bets.forEach(bet => this.state.pot[turn] += bet);
        this.state.bets.fill(0);
        this.state.highestBet = 0;
        this.state.currentPlayer = (this.state.dealer + 3) % this.players.length;
    }

    flop = async () => {
        this.state.flop.push([this.deck.pop().serialize()]);
        this.state.flop.push([this.deck.pop().serialize()]);
        this.state.flop.push([this.deck.pop().serialize()]);
    }

    river = async () => {
        this.state.river = this.deck.pop().serialize();
    }

    turn = async () => {
        this.state.turn = this.deck.pop().serialize();
    }

    checkValidPlayers = async () => {
        this.players.forEach((player, index) => {
            if (this.state.tokens[this.state.currentPlayer] <= 0) {
                this.players.delete(player);
            }
        });
    }


    //func isflush..
    //list
    checkHand = async () => {
        let cards = {};
        cards = this.state.flop;
        cards[3] = this.state.river;
        cards[4] = this.state.turn;
        cards[5] = this.players[0].cards[0];
        cards[6] = this.players[0].cards[1];
        const values = {};
        cards.forEach((card) => {
            if (card.value in values) values[card.value]++;
            else values[card.value] = 1;
        });
    }

    playRound = async () => {
        await this.blinds();
        await this.distributeCards();
        await this.turnTable();
        await this.pot(0);
        await this.flop();
        await this.turnTable();
        await this.pot(1);
        await this.river();
        await this.turnTable();
        await this.pot(2);
        await this.turn();
        await this.turnTable();
        await this.pot(3);
        await this.checkHand();
        //await this.decideWinner();
        //await this.distributeMoney();
        await this.checkValidPlayers();
        await this.dealerChange();
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

