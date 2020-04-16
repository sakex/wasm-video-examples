import React, {Component} from "react";
import {PokerGame, PokerState} from "../pokerGame/pokerGame";
import Styled from "styled-components";

const GameParent = Styled.div`
    width: 1100px;
    height: 725.6px;
`;

const baseButton = `
    cursor: pointer;
    width: 100px;
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid lightgrey;
    display: inline-block;
    margin: 0 20px;
    position: relative;
    transition: 1s;
 `;

const LeaveButton = Styled.div`
    ${baseButton}
    background-color: rgba(240, 10, 10, .7);
    border: 1px solid red;
    
    &:hover {
        background-color: red;
    }
`;

const StartButton = Styled.div`
    ${baseButton}
    background-color: rgba(20, 200, 200, .7);
    border: 1px solid cyan;
    
    &:hover {
        background-color: blue;
    }
`;

const CallButton = Styled.div`
    ${baseButton}
    margin: 0;
    padding: 5px;
    
    &:hover {
        background-color: rgba(240, 10, 10, .7);
    }
`

const CheckButton = Styled.button`
    ${baseButton}
    margin-left: 200px;
    background-color: rgba(30, 220, 30, .4);
    &:hover {
        background-color: rgba(30, 250, 30, 1);
    }
`;


const BetInput = Styled.input`
    width: 140px;
    padding: 5px;
    border-radius: 5px;
    margin-right: 0;
    border: 0;
    padding: 5px;
`;

const Raise = Styled.div`
    ${baseButton}
    width: 200px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid lightgrey;
    display: inline-block;
    margin: 0 20px;
    overflow: hidden;
    top: 10px;
`;

const RaiseButton = Styled.div`
    padding: 5px;
    width: 39px;
    margin: 0;
    margin-left: 0;
    border-left: 1px solid lightgrey;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgba(240, 10, 10, .7);
    }
`

interface PokerProps {
    socket: SocketIOClient.Socket
}

interface StartedState {
    started: boolean,
    highestBet: number,
    bet?: number
}

export default class extends Component<PokerProps, StartedState> {
    private game: PokerGame;
    private readonly socket: SocketIOClient.Socket;
    private tokens: number;
    public readonly state: StartedState = {
        started: false,
        highestBet: 0,
        bet: 0
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
                console.log(state);
                const newState: StartedState = {started: state.started, highestBet: state.highestBet};
                if (newState.highestBet != this.state.highestBet) {
                    newState.bet = newState.highestBet;
                }
                this.setState(newState);
                this.game.setIndex(index);
                this.game.setState(state);
                this.tokens = state.tokens[index];
            });
    };

    valueChange = (e) => {
        const amount = parseFloat(e.target.value);
        if (amount >= 0 && amount <= this.tokens) this.setState({bet: amount});
    };

    bet = () => {
        if (this.state.bet >= this.state.highestBet && this.state.bet <= this.tokens) {
            this.socket.emit("raise", this.state.bet);
        }
    };

    check = () => {
        if (this.state.highestBet === 0) {
            this.socket.emit("raise", 0);
        }
    };

    call = () => {
        if (this.tokens > this.state.highestBet) {
            this.socket.emit("raise", this.state.highestBet);
        }
    };

    allIn = () => {
        this.socket.emit("raise", this.tokens);
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
                    </> :
                    <>
                        <CheckButton onClick={this.check} disabled={this.state.highestBet === 0}>Check</CheckButton>
                        {this.tokens > this.state.highestBet ?
                            <CallButton onClick={this.call}>Call</CallButton> :
                            <CallButton onClick={this.allIn}>All in</CallButton>
                        }
                        <Raise>
                            <BetInput type="number" value={this.state.bet} onChange={this.valueChange}/>
                            <RaiseButton onClick={this.bet}>Raise</RaiseButton>
                        </Raise>
                        <LeaveButton onClick={() => this.socket.emit("pass")}>Fold</LeaveButton>
                    </>
                }
            </>
        );
    }


}

