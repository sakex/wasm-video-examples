import React, {Component} from 'react';
import Poker from "@components/poker";
import SocketIOClient from "socket.io-client";
import Styled from "styled-components";


const Video = Styled.div`
    width: 800px;
    height: 800px;
`;

interface State {
    conId: string,
    members: string[],
    inputName: string,
    joined: number,
    tables: TableData[]
}

export default class Index extends Component<{}, State> {
    public state: State = {conId: null, members: [], inputName: "", joined: -1, tables: []};
    private readonly socket: SocketIOClient.Socket;

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
        });

        this.socket.on("err", (error: string) => {
            console.error(`An error occurred: ${error}`);
        });

        this.socket.on("joined", (joined: number) => {
            this.setState({joined});
            console.log("index:", joined)
        });

        this.socket.on("tables", (tables: TableData[]) => this.setState({tables}));
    };

    valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({inputName: e.target.value});
    };

    keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13) this.sendName().then(() => {
        });
    };

    render() {
        return (
            <>
                <Video id="firstVideo"/>
                {this.state.conId ? <>
                        <UserList callRemote={this.callRemote} {...this.state}/>
                    </> :
                    <>
                        <div>Please enter your name:
                            <p>
                                <input type={"text"} value={this.state.inputName} onKeyPress={this.keyPress}
                                       onChange={this.valueChange}/>
                                <button onClick={this.sendName}>Send name</button>
                            </p>
                        </div>
                    </>
                }
            </>
        );
    }
}
