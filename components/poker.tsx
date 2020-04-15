import React, {Component} from "react";
import {PokerGame} from "../pokerGame/pokerGame";
import Styled from "styled-components";
import {TableData} from "@components/lobby";

const GameParent = Styled.div`
    width: 1110px;
    height: 810px;
`;

interface PokerProps {
    socket: SocketIOClient.Socket
}

interface PokerState {
    index: number,
    cards: string[],
    currentPlayer: number,
    dealer: number,
    highestBet: number,
    firstHighestPlayer: number,
    bets: number[],
    raise: number,
    tables: TableData[]
}

export default class extends Component<PokerProps, PokerState> {
    private game: PokerGame;
    private readonly socket: SocketIOClient.Socket;
    public readonly state: PokerState = {
        index: -1,
        cards: [],
        currentPlayer: -1,
        dealer: -1,
        highestBet: -1,
        firstHighestPlayer: -1,
        bets: [],
        raise: -1,
        tables: []
    };

    constructor(props) {
        super(props);
        this.socket = props.socket;
        this.feedSocket();
    }


    feedSocket = () => {

        this.socket.on("turnPlayer", () => {
        })
            .on("cards", (cards: [[number, string], [number, string]]) => {
                console.log(cards);
                this.game.gotCards(...cards);
            })
            .on("tables", (tables: TableData[]) => {
                this.setState({tables})
            })
            .on("state", (state, index) => {
                this.setState(state);
                this.setState({index});
            });
    };

    valueChange = (e) => {
        this.setState({raise: e.target.value});
    };

    componentDidMount() {
        this.game = new PokerGame(document.querySelector("#__poker_parent"));
        this.game.startRendering();
    }

    render() {
        return (
            <>
                {/*
                this are for the lobby
                */}
                <GameParent id={"__poker_parent"}/>
                <button onClick={() => this.socket.emit("join")}>join</button>
                <button onClick={() => this.socket.emit("leave")}>leave</button>
                <button onClick={() => this.socket.emit("start")}>start</button>
                {/*
                this are for the game
                <button onClick={() => this.socket.emit("checkOrPass")}>Check or Pass</button>
                */}
                <button onClick={() => this.socket.emit("check")}>Check</button>
                <button onClick={() => this.socket.emit("follow")}>Follow</button>
                <button value={this.state.raise} onClick={() => this.socket.emit("raise", this.state.raise)}>Raise
                </button>
                <input placeholder="Higher than the highest bet" defaultValue={this.state.raise}
                       onChange={this.valueChange}/>
                <button onClick={() => this.socket.emit("pass")}>Pass</button>

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

