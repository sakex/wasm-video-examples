import React, {Component} from "react"

export default class extends Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;
    }

    render() {
        return (
            <>
                <button onClick={() => this.socket.emit("join")}>join</button>
                <button onClick={() => this.socket.emit("leave")}>leave</button>
                <button onClick={() => this.socket.emit("start")}>start</button>
                <button onClick={() => this.socket.emit("check")}>Check</button>
            </>
        );
    }


}

