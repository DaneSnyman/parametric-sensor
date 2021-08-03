import { Utils } from "./utils";

export class Draw {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private mouse = new Utils.Mouse();
  x: number;
  y: number;
  private waveLength: number;
  private frequency = 0.03;
  private increment = 0.03;
  private amplitude = 100;
  private color: string;
  private mouseDistance: number;

  constructor(canvas: HTMLCanvasElement, waveLength: number) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.waveLength = waveLength;
    this.color = Utils.randomColor();
  }

  update(): void {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.mouseDistance = this.mouse.getMouseDistance(this.x, this.y);
    this.amplitude =
      (this.canvas.width > this.canvas.height
        ? this.canvas.width - this.canvas.height - this.mouseDistance
        : this.canvas.height - this.canvas.width - this.mouseDistance) / 5;
    this.increment += this.frequency;
    this.effect1();
  }

  private effect1(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.x + this.sin((this.canvas.width / 2 - this.mouseDistance) / 3),
      this.y + this.cos(this.mouseDistance / 2)
    );
    this.ctx.lineTo(
      this.x + this.cos((this.canvas.width / 2 - this.mouseDistance) / 2),
      this.y + this.cos((this.canvas.width / 2 - this.mouseDistance) / 3)
    );
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  private effect2(): void {
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.x + this.sin((this.canvas.width / 2 - this.mouseDistance) / 3),
      this.y + this.cos(this.mouseDistance / 2)
    );
    this.ctx.lineTo(
      this.x + this.cos((this.canvas.width / 2 - this.mouseDistance) / 2),
      this.y + this.cos((this.canvas.width / 2 - this.mouseDistance) / 3)
    );
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  private sin = (i: number): number => {
    return Math.sin(i * this.waveLength + this.increment) * this.amplitude;
  };

  private cos = (i: number): number => {
    return Math.cos(i * this.waveLength + this.increment) * this.amplitude;
  };
}
