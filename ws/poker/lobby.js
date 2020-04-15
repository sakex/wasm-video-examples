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
                if (!game.players.includes(this) && game.players.size < Lobby.maxPlayer) {
                    game.addPlayer(this);
                    this.game = game;
                    this.emitTables();
                    this.socket.emit("joined");
                }
            } catch (e) {
                console.error(e);
            }
        })
            .on("create", async (id) => {
                const current = Lobby.lastGame++;
                const game = new Game();
                Lobby.games[`${id}_${current}`] = game;
                game.addPlayer(this);
                this.emitTables();
                this.socket.emit("joined");
            })
            .on("start", async () => {
                try {
                    await this.game.start();
                } catch (e) {
                    console.error(e);
                }
            });

    };
}


module.exports = Lobby;
