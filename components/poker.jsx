import React, {Component} from "react"

export default class extends Component {

    static turnSeconds = 0;

    constructor(props) {
        super(props);
        this.socket = props.socket;
        this.feedSocket();
    }

    feedSocket = () => {

            Component.turnSeconds = this.socket.on("turnPlayer", () => {
            });
        };


    render() {
        return (
            <>
                <button onClick={() => this.socket.emit("join")}>join</button>
                <button onClick={() => this.socket.emit("leave")}>leave</button>
                <button onClick={() => this.socket.emit("start")}>start</button>
                <button onClick={() => this.socket.emit("check")}>Check</button>
                <button onClick={() => this.socket.emit("pass")}>Pass</button>
                <button onClick={() => this.socket.emit("follow")}>Follow</button>
                <button onClick={() => this.socket.emit("raise")}>Raise</button>

                {/*
                    <div>{Component.turnSeconds}</div>
                */}
            </>
        );
    }


}

class Cards{
    // 1 is As, .., 11 is Jack, 12 is Queen, 13 is King
    let number = new Set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
    //0 is Spades, 1 is Heart, 2 is Diamond, 3 is Clubs
    let color = Set(0, 1, 2, 3);
}

class Player{
    let tokens = 1000;
    let bet = 0;
    let cards = [Cards, Cards];
}

