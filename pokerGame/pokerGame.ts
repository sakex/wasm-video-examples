import {GenericSprite} from "./sprite";
import {Card} from "./card";

export class PokerGame {
    private readonly ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private readonly canvas;
    private readonly tableSprite: GenericSprite;
    private cards: Card[] = [];

    constructor(private readonly parent: HTMLElement) {
        Card.setSrc("/sprites/cards.png");
        this.width = parent.offsetWidth;
        this.height = parent.offsetHeight;
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        parent.appendChild(canvas);
        this.ctx = canvas.getContext("2d");
        Card.setContext(this.ctx);
        this.canvas = canvas;
        document.body.onresize = this.onResize;
        this.tableSprite = new GenericSprite("table.png", this.ctx);
    }

    private onResize = () => {
        this.width = this.parent.offsetWidth;
        this.height = this.parent.offsetHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    };

    public gotCards = (firstCard: [number, string], secondCard: [number, string]) => {
        const c1 = new Card(...firstCard);
        const c2 = new Card(...secondCard);
        this.cards = [c1, c2];
    };

    private render = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        this.tableSprite.draw(0, 0, this.width, this.height);
        if(this.cards.length){
            this.cards[0].draw(this.width / 2 - 100, this.height - 160, 80, 120);
            this.cards[1].draw(this.width / 2 - 30, this.height - 160, 80, 120);
        }
        this.ctx.closePath();
    };

    public startRendering = () => {
        const closure = () => {
            this.render();
            requestAnimationFrame(closure);
        };
        requestAnimationFrame(closure);
    };

}