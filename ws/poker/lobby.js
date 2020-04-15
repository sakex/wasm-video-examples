const Game = require("./game");

class Lobby {
    static maxPlayer = 9;
    static games = {};
    static lastGame = 0;

    constructor(socket, id) {
        this.socket = socket;
        this.id = id;
        this.feedSocket();
        this.game = null;
    }

    emitTables = () => {
        Lobby.IO.emit("tables", Object.keys(Lobby.games).map(key => {
            return {id: key, players: Lobby.games[key].players.length};
        }));
    };

    feedSocket = () => {
        setTimeout(() => {
            this.socket.emit("tables", Object.keys(Lobby.games).map(key => {
                return {id: key, players: Lobby.games[key].players.length};
            }));
        }, 1000);

        this.socket.on("join", (id) => {
            try {
                const game = Lobby.games[id];
                if (!game.players.includes(this) && game.players.length < Lobby.maxPlayer) {
                    this.socket.emit("joined", true);
                    game.addPlayer(this);
                    this.game = game;
                    this.emitTables();
                }
            } catch (e) {
                console.error(e);
            }
        })
            .on("create", async (id) => {
                const current = Lobby.lastGame++;
                const game = new Game(`${id}_${current}`);
                Lobby.games[`${id}_${current}`] = game;
                game.addPlayer(this);
                this.game = game;
                this.emitTables();
                this.socket.emit("joined", true);
            })
            .on("start", async () => {
                try {
                    await this.game.start();
                } catch (e) {
                    console.error(e);
                }
            })
            .on("leave", async () => {
                const index = this.game.players.indexOf(this);
                this.game.players.splice(index, 1);
                if(this.game.players.length === 0) {
                    delete Lobby.games[this.game.id];
                }
                this.game = undefined;
                this.socket.emit("joined", false);
                this.emitTables();
        });

    };
}


module.exports = Lobby;
