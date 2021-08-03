import { colors } from "./colors";

export namespace Utils {
  export class Mouse {
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

    getMouseDistance(x: number, y: number): number {
      return getDistance(x, y, this.mouse.x, this.mouse.y);
    }
  }

  export const getDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  export const randomColor = (): string => {
    const colorsArr = [];
    for (const color in colors) {
      if (color !== "black") {
        colorsArr.push(color);
      }
    }
    const randomColor = colorsArr[random(colorsArr.length - 1)];
    return colors[randomColor];
  };

  export const random = (max: number, min = 0, returnInt = true): number => {
    const randomNum = Math.random() * (max - min) + min;
    return returnInt ? Math.floor(randomNum) : randomNum;
  };
}
