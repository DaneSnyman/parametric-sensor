export class Canvas {
  readonly element: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;

  constructor() {
    this.element = document.querySelector("canvas");
    this.ctx = this.element.getContext("2d");
    this.resizeCanvas();
  }

  resizeCanvas(): void {
    if (
      window.innerWidth !== this.element.width ||
      window.innerHeight !== this.element.height
    ) {
      this.element.width = window.innerWidth;
      this.element.height = window.innerHeight;
    }
  }
}
