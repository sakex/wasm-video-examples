import React, {Component} from "react"

export default class extends Component {

    static turnSeconds = 0;

    constructor(props) {
        super(props);
        this.socket = props.socket;
        this.currentCards = [];
        this.currentState = null;

        this.feedSocket();
    }


    feedSocket = () => {

        this.socket.on("turnPlayer", () => {
        })
            .on("cards", (cards) => this.setState(this.currentCards = cards))
            .on("state", (state) => this.setState(this.currentState = state))
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
                <div>{this.currentCards}</div>
                <div>{this.currentState}</div>

                {/*

                */}
            </>
        );
    }


}

