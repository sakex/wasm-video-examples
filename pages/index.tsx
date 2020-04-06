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
    private candidates = [];
    private peer;

    async componentDidMount() {
        const {Streaming, init_panic_hook} = await import("@video-stream");
        init_panic_hook();
        Index.Streaming = Streaming;
        this.streaming = new Index.Streaming(document.querySelector("#firstVideo"));
        this.peer = this.streaming.get_peer();
        Reflect.set(window, "peer", this.peer);
        this.socket = io();
        this.socket.on("candidate", ({id, candidate}) => {this.candidates.push(candidate); console.log(this.candidates)});
        this.socket.on("connectionId", (conId: number) => this.setState({conId}));
        this.socket.on("members", (members: number[]) => this.setState({members}));
        this.socket.on("call", async ({id, selfId, data}: CallParams) => {
            const offer = JSON.parse(data);
            this.streaming.set_on_ice_candidate((candidate) => {
                this.socket.emit("candidate", {candidate: candidate, id: selfId});
            });
            const answer = await this.streaming.accept_offer(offer).get_offer();
            this.socket.emit("answer", ({id: selfId, selfId: this.state.conId, data: JSON.stringify(answer)}));
            this.candidates.forEach(c => this.streaming.add_ice_candidate(c));
            console.log(this.candidates);
            await this.streaming.load_video();
        });
        this.socket.on("answer", async ({id, selfId, data}: CallParams) => {
            const offer = JSON.parse(data);
            await this.streaming.accept_answer(offer).get_offer();
            this.candidates.forEach(c => this.streaming.add_ice_candidate(c));
            await this.streaming.load_video();
            console.log(this.candidates);
        });
    }


    callRemote = async (user: number) => {
        this.streaming.set_on_ice_candidate((candidate) => {
            this.socket.emit("candidate", {candidate: candidate, id: user});
        });
        const offer = await this.streaming.create_offer().get_offer();
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
