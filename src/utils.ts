import { colors } from "./colors";

export class Utils {
  readonly mouse = {
    x: 0,
    y: 0,
  };

  constructor() {
    addEventListener("mousemove", (ev: MouseEvent) => {
      this.mouse.x = ev.clientX;
      this.mouse.y = ev.clientY;
    });
  }

  getDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  getMouseDistance(x: number, y: number): number {
    return this.getDistance(x, y, this.mouse.x, this.mouse.y);
  }

  randomColor(): string {
    const colorsArr = [];
    for (const color in colors) {
      if (color !== "black") {
        colorsArr.push(color);
      }
    }
    const randomColor = colorsArr[this.random(colorsArr.length - 1)];
    return colors[randomColor];
  }

  random(max: number, min = 0, returnInt = true) {
    const randomNum = Math.random() * (max - min) + min;
    return returnInt ? Math.floor(randomNum) : randomNum;
  }
}
