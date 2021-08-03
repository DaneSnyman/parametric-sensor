import { Draw } from "./draw";
export class Swarm {
  private swarmArr: Draw[] = [];
  private nAmount: number;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, nAmount: number) {
    this.nAmount = nAmount;
    this.canvas = canvas;
    this.spawnSwarm();
  }

  private spawnSwarm(): void {
    for (let i = 0; i < this.nAmount; i++) {
      const waveLength = i / 1000;
      this.swarmArr.push(new Draw(this.canvas, waveLength));
    }
  }

  update(): void {
    this.swarmArr.forEach((draw) => {
      draw.update();
    });
  }
}
