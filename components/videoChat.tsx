import React, {Component} from "react";
import SocketIOClient from "socket.io-client";
import {UserList} from "@components/userList";

interface VideoProps {
    socket: SocketIOClient.Socket,
    conId: string,
    members: string[]
}

interface CallParams {
    id: string,
    senderId: string,
    data: string
}

export class VideoChat extends Component<VideoProps, {}> {
    private readonly socket = SocketIOClient.Socket;
    private readonly conId: string;
    private streaming;

    constructor(props: VideoProps) {
        super(props);

        this.socket = props.socket;
        this.conId = props.conId;
    }

    feedSocket = () => {
        this.socket.on("callMembers", async (members: string[]) => {
            const ids = this.streaming.get_ids();
            members.forEach((id: string) => {
                if (!ids.has(id)) this.callRemote(id);
            });
        });

        this.socket.on("candidate", ({senderId, candidate}) => {
            try {
                this.streaming.add_ice_candidate(senderId, candidate);
            } catch (err) {
                console.error(err);
            }
        });

        this.socket.on("call", async ({senderId, data}: CallParams) => {
            try {
                this.streaming.create_connection(senderId);
                const offer = JSON.parse(data);
                this.streaming.set_on_ice_candidate(senderId, (candidate) => {
                    this.socket.emit("candidate", {candidate, senderId: this.conId, id: senderId});
                });
                const answer = await this.streaming.accept_offer(senderId, offer).get_offer();
                this.socket.emit("answer", ({id: senderId, senderId: this.conId, data: JSON.stringify(answer)}));
                const ids = this.streaming.get_ids();
                if (ids.length > 1) {
                    this.socket.emit("callMembers", ({id: senderId, members: [...this.streaming.get_ids()]}));
                }
            } catch (err) {
                console.error("already connected");
            }
        });

        this.socket.on("answer", async ({senderId, data}: CallParams) => {
            const offer = JSON.parse(data);
            await this.streaming.accept_answer(senderId, offer).get_offer();
        });
    };

    callRemote = async (user: string) => {
        try {
            this.streaming.create_connection(user);
            this.streaming.set_on_ice_candidate(user, (candidate) => {
                this.socket.emit("candidate", {candidate, senderId: this.conId, id: user});
            });
            const offer = await this.streaming.create_offer(user).get_offer();

            this.socket.emit("call", ({id: user, senderId: this.conId, data: JSON.stringify(offer)}));
            const ids = this.streaming.get_ids();
            if (ids.length > 1) {
                this.socket.emit("callMembers", ({id: user, members: [...this.streaming.get_ids()]}));
            }
        } catch (err) {
            console.log(err);
        }
    };

    async componentDidMount() {
        const {Streaming, init_panic_hook} = await import("@video-stream");
        init_panic_hook();
        this.streaming = new Streaming(document.querySelector("#firstVideo"));
        try {
            await this.streaming.load_video();
        } catch (err) {
            alert("Couldn't load video");
        }
    }

    render() {
        return <>
            <div id="firstVideo"/>
            <UserList callRemote={this.callRemote} {...this.props}/>
        </>;
    }
}