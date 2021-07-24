import "./style.scss";
import { Canvas } from "./canvas";
import { colors } from "./colors";
import { Swarm } from "./swarm";

const canvas = new Canvas();
const swarm = new Swarm(canvas.element, 20);
const animate = (): void => {
  canvas.resizeCanvas();
  requestAnimationFrame(animate);
  canvas.ctx.fillStyle = colors.black;
  canvas.ctx.fillRect(0, 0, canvas.element.width, canvas.element.height);
  swarm.update();
};

animate();
