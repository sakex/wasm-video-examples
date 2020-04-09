import React, {ChangeEvent, Component} from 'react';
import {UserList} from "@components/userList";
import SocketIOClient from "socket.io-client";

interface State {
    conId: string,
    members: string[],
    inputName: string
}

interface CallParams {
    id: string,
    senderId: string,
    data: string
}

export default class Index extends Component<{}, State> {
    public state: State = {conId: null, members: [], inputName: ""};
    private socket: SocketIOClient.Socket;
    private streaming;

    constructor(props) {
        super(props);
        this.socket = SocketIOClient();
    }

    sendName = async () => {
        this.loadSocket();
        this.socket.emit("enterId", this.state.inputName);
    };

    loadSocket = () => {
        this.socket.on("connectionId", async (conId: string) => {
            await this.setState({conId: conId.toString()});
            try {
                await this.streaming.load_video();
            } catch (err) {
                alert("Couldn't load video");
            }
        });

        this.socket.on("callMembers", async (members: string[]) => {
            members.forEach(this.callRemote);
        })

        this.socket.on("error", (error: string) => {
            alert(`An error occured: ${error}`);
        });

        this.socket.on("members", (members: string[]) => this.setState({members}));

        this.socket.on("candidate", ({senderId, candidate}) => {
            this.streaming.add_ice_candidate(senderId, candidate);
        });

        this.socket.on("call", async ({senderId, data}: CallParams) => {
            try {
                this.streaming.create_connection(senderId);
            }
            catch(err){
                console.log("already connected");
            }
            const offer = JSON.parse(data);
            this.streaming.set_on_ice_candidate(senderId, (candidate) => {
                this.socket.emit("candidate", {candidate, senderId: this.state.conId, id: senderId});
            });
            await this.streaming.load_video();
            const answer = await this.streaming.accept_offer(senderId, offer).get_offer();
            this.socket.emit("answer", ({id: senderId, senderId: this.state.conId, data: JSON.stringify(answer)}));
            const ids = this.streaming.get_ids();
            if(ids.length > 1){
                this.socket.emit("callMembers", ({id: senderId, members: this.streaming.get_ids()}));
            }
        });

        this.socket.on("answer", async ({senderId, data}: CallParams) => {
            const offer = JSON.parse(data);
            await this.streaming.accept_answer(senderId, offer).get_offer();
        });
    };

    async componentDidMount() {
        const {Streaming, init_panic_hook} = await import("@video-stream");
        init_panic_hook();
        this.streaming = new Streaming(document.querySelector("#firstVideo"));
    }

    callRemote = async (user: string) => {
        try {
            this.streaming.create_connection(user);
            this.streaming.set_on_ice_candidate(user, (candidate) => {
                this.socket.emit("candidate", {candidate, senderId: this.state.conId, id: user});
            });
            const offer = await this.streaming.create_offer(user).get_offer();
            this.socket.emit("call", ({id: user, senderId: this.state.conId, data: JSON.stringify(offer)}));
        }
        catch(err){
            console.log(err);
        }
    };

    valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({inputName: e.target.value});
    };

    keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.which === 13) this.sendName().then(() => {});
    };

    render() {
        return (
            <>
                <div id="firstVideo"/>
                {this.state.conId ? <>
                        <UserList callRemote={this.callRemote} {...this.state}/>
                    </> :
                    <>
                        <div>Please enter your name:
                            <p>
                                <input type={"text"} value={this.state.inputName} onKeyPress={this.keyPress} onChange={this.valueChange}/>
                                <button onClick={this.sendName}>Send name</button>
                            </p>
                        </div>
                    </>
                }
            </>
        );
    }
}
