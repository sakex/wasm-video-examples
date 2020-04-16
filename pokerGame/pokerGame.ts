import {Card} from "./card";
import {TableData} from "@components/lobby";

export interface PokerState {
    index: number,
    cards: string[],
    currentPlayer: number,
    dealer: number,
    highestBet: number,
    firstHighestPlayer: number,
    bets: number[],
    tokens: number[],
    pot: number[],
    flop: string[],
    river: string,
    turn: string,
    playing: boolean[],
    raise: number,
    tables: TableData[],
    started: boolean
}

export class PokerGame {
    private readonly ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private readonly canvas;
    private cards: Card[] = [];
    private index: number;
    private seats: [number, number][];
    private state: PokerState = new class implements PokerState {
        bets: number[];
        cards: string[];
        currentPlayer: number;
        dealer: number;
        firstHighestPlayer: number;
        flop: string[];
        highestBet: number;
        index: number;
        playing: boolean[];
        pot: number[];
        raise: number;
        river: string;
        started: boolean;
        tables: TableData[];
        tokens: number[];
        turn: string;
    };

    constructor(private readonly parent: HTMLElement) {
        Card.setSrc("/sprites/cards.png");
        this.width = parent.offsetWidth;
        this.height = parent.offsetHeight;
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        canvas.style.backgroundImage = "url('/sprites/table.png')";
        canvas.style.backgroundSize = "cover";
        canvas.width = this.width;
        canvas.height = this.height;
        parent.appendChild(canvas);
        this.ctx = canvas.getContext("2d");
        Card.setContext(this.ctx);
        this.canvas = canvas;
        document.body.onresize = this.onResize;
        this.setSeatsPos();
    }

    private setSeatsPos = () => {
        const seats = [[600, 650], [200, 570], [142, 165], [600, 100], [1135, 150], [1150, 630]];
        const wScale = this.width / 1376;
        const hScale = this.height / 891;
        this.seats = seats.map((pair: number[]) => [pair[0] * wScale, pair[1] * hScale]);
    };

    public setIndex = (index: number) => {
        this.index = index;
    };

    public setState = (state: PokerState) => {
        this.state = state;
        this.render();
    };

    private onResize = () => {
        this.width = this.parent.offsetWidth;
        this.height = this.parent.offsetHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.setSeatsPos();
    };

    public gotCards = (firstCard: [number, string], secondCard: [number, string]) => {
        const c1 = new Card(...firstCard);
        const c2 = new Card(...secondCard);
        this.cards = [c1, c2];
        this.render();
    };

    private render = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        if (this.cards.length) {
            this.cards[0].draw(this.seats[0][0], this.seats[0][1], 80, 120);
            this.cards[1].draw(this.seats[0][0] + 70, this.seats[0][1], 80, 120);
        }
        const {length} = this.state.tokens;
        this.ctx.fillStyle = "gold";
        this.ctx.font = "30px Georgia";
        this.state.tokens.forEach((token, index) => {
            const pos = index >= this.index ? (index - this.index) : (length - this.index + index);
            const [x, y] = this.seats[pos];
            this.ctx.fillText(`$ ${token}`, x, y);
        });
        this.ctx.closePath();
    };

}