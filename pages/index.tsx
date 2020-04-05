import React, {Component} from 'react';
import io from 'socket.io-client';
import {UserList} from "@components/userList";

interface State {
    conId: number,
    members: number[]
}

export default class extends Component<{}, State> {
    public state: State = {conId: -1, members: []};
    private socket;
    private streaming;
    private stream;

    async componentDidMount() {
        const wasm = import("@video-stream");
        this.socket = io();
        this.socket.on("connectionId", (conId: number) => this.setState({conId}));
        this.socket.on("members", (members: number[]) => this.setState({members}));
        const {Streaming} = await wasm;

        document.querySelector("#load").addEventListener("click", async () => {
            this.streaming = new Streaming(document.querySelector("#firstVideo"));
            this.stream = await this.streaming.load_video();
        });

        document.querySelector("#start").addEventListener("click", async () => {
            await this.streaming.call(this.stream);
        });
    }

    render() {
        return (
            <>
                <div id="firstVideo"/>
                <button id="load">Load Video</button>
                <button id="start"> Start</button>
                <UserList members={this.state.members}/>
            </>
        );
    }
}
