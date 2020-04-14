import React, {Component} from "react"

export default class extends Component {

    static turnSeconds = 0;

    constructor(props) {
        super(props);
        this.socket = props.socket;
        this.state = {
            index:-1,
            cards:[],
            currentPlayer:-1,
            dealer:-1,
            highestBet:-1,
            firstHighestPlayer:-1,
            bets:[],
            raise:-1
        };
        this.feedSocket();
    }


    feedSocket = () => {

        this.socket.on("turnPlayer", () => {
        })
            .on("cards", (cards) => this.setState({ cards }))
            .on("state", (state, index) => {
                this.setState(state);
                this.setState({ index });
            })
    };


    render() {
        return (
            <>
                {/*
                this are for the lobby
                */}
                <button onClick={() => this.socket.emit("join")}>join</button>
                <button onClick={() => this.socket.emit("leave")}>leave</button>
                <button onClick={() => this.socket.emit("start")}>start</button>
                {/*
                this are for the game
                <button onClick={() => this.socket.emit("checkOrPass")}>Check or Pass</button>
                */}
                <button onClick={() => this.socket.emit("check")}>Check</button>
                <button onClick={() => this.socket.emit("follow")}>Follow</button>

                <button value={this.state.raise} onClick={() => this.socket.emit("raise", this.raise)}>Raise</button>
                <input type="text" placeholder="Higher than the highest bet" defaultValue={this.state.raise} />
                <button onClick={() => this.socket.emit("pass")}>Pass</button>

                <div>Cards: {this.state.cards}</div>
                <div>You are player nb: {this.state.index}</div>
                <div>Dealer: {this.state.dealer}</div>
                <div>Current player: {this.state.currentPlayer}</div>
                <div>The bets are: {this.state.bets}</div>
                <div>Your bet is: {this.state.bets[this.state.index]}</div>
                <div>Highest bet: {this.state.highestBet}</div>
                <div>Player with highest bet: {this.state.firstHighestPlayer}</div>
            </>
        );
    }


}

