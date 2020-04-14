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
            bets:[]
        };
        this.feedSocket();
    }


    feedSocket = () => {

        this.socket.on("turnPlayer", () => {
        })
            .on("cards", (cards) => this.setState({ cards }))
            .on("state", (state) => this.setState(state))
            .on("index", (index) => this.setState({index}))
    };


    render() {
        return (
            <>
                <button onClick={() => this.socket.emit("join")}>join</button>
                <button onClick={() => this.socket.emit("leave")}>leave</button>
                <button onClick={() => this.socket.emit("start")}>start</button>

                <button onClick={() => this.socket.emit("check")}>Check</button>
                <button onClick={() => this.socket.emit("checkOrPass")}>Check or Pass</button>
                <button onClick={() => this.socket.emit("pass")}>Pass</button>
                <button onClick={() => this.socket.emit("follow")}>Follow</button>
                <button onClick={() => this.socket.emit("raise")}>Raise</button>
                <div>Cards: {this.state.cards}</div>
                <div>You are player nb: {this.state.index}</div>
                <div>Current player: {this.state.currentPlayer}</div>
                <div>Dealer: {this.state.dealer}</div>
                <div>Highest bet: {this.state.highestBet}</div>
                <div>Biggest bet from player: {this.state.firstHighestPlayer}</div>
                <div>The bets are: {this.state.bets}</div>
            </>
        );
    }


}

