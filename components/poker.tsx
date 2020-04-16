import React, {Component} from "react";
import {PokerGame, PokerState} from "../pokerGame/pokerGame";
import Styled from "styled-components";
import {TableData} from "@components/lobby";

const GameParent = Styled.div`
    width: 1100px;
    height: 725.6px;
`;

const baseButton = `
    cursor: pointer;
    width: 100px;
    height: 10x;
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid lightgrey;
    display: inline-block;
 `;

const LeaveButton = Styled.div`
    ${baseButton}
    background-color: rgba(240, 10, 10, .7);
    border: 1px solid red;
    transition: 1s;
    
    &:hover {
        background-color: red;
    }
`;

const StartButton = Styled.div`
    ${baseButton}
    background-color: rgba(20, 200, 200, .7);
    border: 1px solid cyan;
    transition: 1s;
    
    &:hover {
        background-color: blue;
    }
`;

interface PokerProps {
    socket: SocketIOClient.Socket
}

interface StartedState {
    started: boolean,
    raise: number
}

export default class extends Component<PokerProps, StartedState> {
    private game: PokerGame;
    private readonly socket: SocketIOClient.Socket;
    public readonly state: StartedState = {
        started: false,
        raise: 0
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
            .on("state", (state: PokerState, index) => {
                this.setState({started: state.started});
                this.game.setIndex(index);
                this.game.setState(state);
                console.log(state);
            });
    };

    valueChange = (e) => {
        this.setState({raise: e.target.value});
    };

    componentDidMount() {
        this.game = new PokerGame(document.querySelector("#__poker_parent"));
    }

    render() {
        return (
            <>
                <GameParent id={"__poker_parent"}/>
                {!this.state.started ? <>
                    <LeaveButton onClick={() => this.socket.emit("leave")}>leave</LeaveButton>
                    <StartButton onClick={() => this.socket.emit("start")}>start</StartButton>
                </>:
                    <>
                        <button onClick={() => this.socket.emit("check")}>Check</button>
                        <button onClick={() => this.socket.emit("follow")}>Follow</button>
                        <button value={this.state.raise} onClick={() => this.socket.emit("raise", this.state.raise)}>Raise
                        </button>
                        <input placeholder="Higher than the highest bet" defaultValue={this.state.raise}
                               onChange={this.valueChange}/>
                        <button onClick={() => this.socket.emit("pass")}>Pass</button>
                    </>
                }
            </>
        );
    }


}

