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

export default class Index extends Component<{}, State> {
    public state: State = {conId: -1, members: []};
    private socket;
    private streaming;
    static Streaming;

    async componentDidMount() {
        const wasm = import("@video-stream");
        this.socket = io();
        this.socket.on("connectionId", (conId: number) => this.setState({conId}));
        this.socket.on("members", (members: number[]) => this.setState({members}));
        this.socket.on("call", async ({id, selfId, data}: CallParams) => {
            const offer = JSON.parse(data);
            this.streaming = new Streaming(document.querySelector("#firstVideo"));

            this.socket.on("candidate", ({id, candidate}) => this.streaming.add_ice_candidate(candidate));
            const answer = await this.streaming.accept_offer(offer).get_offer();
            this.streaming.set_on_ice_candidate((candidate) => {
                this.socket.emit("candidate", {candidate: candidate, id: selfId});
            });
            await this.streaming.load_video();
            this.socket.emit("answer", ({id: selfId, selfId: this.state.conId, data: JSON.stringify(answer)}));
        });
        this.socket.on("answer", async ({id, selfId, data}: CallParams) => {
            const offer = JSON.parse(data);
            await this.streaming.accept_answer(offer).get_offer();
        });
        const {Streaming, init_panic_hook} = await wasm;
        Index.Streaming = Streaming;
        init_panic_hook();
    }


    callRemote = async (user: number) => {
        this.streaming = new Index.Streaming(document.querySelector("#firstVideo"));
        this.streaming.set_on_ice_candidate((candidate) => {
            this.socket.emit("candidate", {candidate: candidate, id: user});
        });
        this.socket.on("candidate", ({id, candidate}) => this.streaming.add_ice_candidate(candidate));
        const offer = await this.streaming.create_offer().get_offer();
        await this.streaming.load_video();
        this.socket.emit("call", ({id: user, selfId: this.state.conId, data: JSON.stringify(offer)}));
    };

    render() {
        return (
            <>
                <div id="firstVideo"/>
                <UserList callRemote={this.callRemote} {...this.state}/>
            </>
        );
    }
}
