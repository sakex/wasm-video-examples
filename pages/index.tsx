import React, {Component} from 'react';
import io from 'socket.io-client';
import {UserList} from "@components/userList";

interface State {
    conId: string,
    members: string[]
}

interface CallParams {
    id: string,
    senderId: string,
    data: string
}

export default class Index extends Component<{}, State> {
    public state: State = {conId: null, members: []};
    private socket;
    private streaming;
    static Streaming;

    async componentDidMount() {
        const {Streaming, init_panic_hook} = await import("@video-stream");
        init_panic_hook();
        Index.Streaming = Streaming;
        this.streaming = new Index.Streaming(document.querySelector("#firstVideo"));
        await this.streaming.load_video();
        this.socket = io();
        this.socket.on("candidate", ({senderId, candidate}) => {
            this.streaming.add_ice_candidate(senderId, candidate);
        });
        this.socket.on("connectionId", (conId: string) => this.setState({conId: conId.toString()}));
        this.socket.on("members", (members: string[]) => this.setState({members}));
        this.socket.on("call", async ({senderId, data}: CallParams) => {
            this.streaming.create_connection(senderId);
            const offer = JSON.parse(data);
            this.streaming.set_on_ice_candidate(senderId, (candidate) => {
                this.socket.emit("candidate", {candidate, senderId: this.state.conId, id: senderId});
            });
            await this.streaming.load_video();
            const answer = await this.streaming.accept_offer(senderId, offer).get_offer();
            this.socket.emit("answer", ({id: senderId, senderId: this.state.conId, data: JSON.stringify(answer)}));
        });
        this.socket.on("answer", async ({senderId, data}: CallParams) => {
            const offer = JSON.parse(data);
            await this.streaming.accept_answer(senderId, offer).get_offer();
        });
    }


    callRemote = async (user: string) => {
        this.streaming.create_connection(user);
        this.streaming.set_on_ice_candidate(user, (candidate) => {
            this.socket.emit("candidate", {candidate, senderId: this.state.conId, id: user});
        });
        const offer = await this.streaming.create_offer(user).get_offer();
        this.socket.emit("call", ({id: user, senderId: this.state.conId, data: JSON.stringify(offer)}));
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
