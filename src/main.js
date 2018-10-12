// @ts-check
const TAU = Math.PI * 2;

const state = {
  /** @type {number} */
  timestamp: undefined,
  /** @type {number} */
  deltaTime: undefined,
  /** @type {HTMLCanvasElement} */
  canvas: undefined,
  /** @type {CanvasRenderingContext2D} */
  ctx: undefined,
  /** @type {Array<{x: number, y: number, radius: number}>} */
  particles: []
};

function init() {
  state.canvas = document.createElement("canvas");
  state.ctx = state.canvas.getContext("2d");
  document.body.appendChild(state.canvas);
  addEventListener("resize", resize);
  resize();
  tick();

  setInterval(() => {
    addParticle({
      x: Math.random(),
      y: Math.random() / 5,
      radius: Math.random() * 20 + 5
    });
  }, 50);
}

function addParticle(params) {
  const { x = 0.5, y = 0.5, radius = 10 } = params || {};
  state.particles.push({ x, y, radius });
}

function tick(timestamp = 0) {
  state.deltaTime = timestamp - state.timestamp;
  state.timestamp = timestamp;

  update();
  draw();
  requestAnimationFrame(tick);
}

function update() {
  const { particles, canvas } = state;
  for (const particle of particles) {
    particle.y += canvas.height / 100000;

    if (particle.y < 0) {
      particle.y = 0;
    } else if (particle.y > 1) {
      particle.y = 1;
    }

    if (particle.x < 0) {
      particle.x = 0;
    } else if (particle.x > 1) {
      particle.x = 1;
    }
  }
}

function draw() {
  const { particles, canvas, ctx } = state;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  for (const { x, y, radius } of particles) {
    ctx.beginPath();
    ctx.arc(x * canvas.width, y * canvas.height, radius, 0, TAU);
    ctx.fill();
  }
}

function resize() {
  state.canvas.width = innerWidth * devicePixelRatio;
  state.canvas.height = innerHeight * devicePixelRatio;

  state.canvas.style.width = `${innerWidth}px`;
  state.canvas.style.height = `${innerHeight}px`;
}

init();
