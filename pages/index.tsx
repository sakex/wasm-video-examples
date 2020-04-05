import React, {Component} from 'react';
import io from 'socket.io-client';
import {UserList} from "@components/userList";

interface State {
    conId: number,
    members: number[]
}

interface CallParams {
    id: number,
    selfId: number,
    data: string
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
        this.socket.on("call", async ({id, selfId, data}: CallParams) => {
            const offer = JSON.parse(data);
            const answer = await this.streaming.accept_offer(this.stream, offer).get_offer();
            this.socket.emit("answer", ({id: selfId, selfId: this.state.conId, data: JSON.stringify(answer)}));
        });
        this.socket.on("answer", async ({id, selfId, data}: CallParams) => {
            const offer = JSON.parse(data);
            const answer = await this.streaming.accept_answer(offer).get_offer();
            console.log(answer);
        });
        const {Streaming, init_panic_hook} = await wasm;
        init_panic_hook();

        document.querySelector("#load").addEventListener("click", async () => {
            this.streaming = new Streaming(document.querySelector("#firstVideo"));
            this.stream = await this.streaming.load_video();
        });
    }

    callRemote = async (user: number) => {
        const offer = await this.streaming.create_offer(this.stream).get_offer();
        this.socket.emit("call", ({id: user, selfId: this.state.conId, data: JSON.stringify(offer)}));
    };

    render() {
        return (
            <>
                <div id="firstVideo"/>
                <button id="load">Load Video</button>
                <UserList callRemote={this.callRemote} {...this.state}/>
            </>
        );
    }
}
