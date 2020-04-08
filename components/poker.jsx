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

                {/*
                    <div>{Component.turnSeconds}</div>
                */}
            </>
        );
    }


}

