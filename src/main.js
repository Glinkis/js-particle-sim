const state = {
  timestamp: undefined,
  deltaTime: undefined,
  canvas: undefined,
  ctx: undefined,
  particles: []
};

function init() {
  state.canvas = document.createElement("canvas");
  state.ctx = state.canvas.getContext("2d");
  document.body.appendChild(state.canvas);
  addEventListener("resize", resize);
  tick();
}

function addParticle(params) {
  const { x = 0.5, y = 0.5, radius = 1 } = params;
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
  const { particles } = state;
  for (const particle of particles) {
    // Update particle.
  }
}

function draw() {
  const { particles } = state;
  for (const particle of particles) {
    // Draw particle.
  }
}

function resize() {
  state.canvas.width = innerWidth * devicePixelRatio;
  state.canvas.height = innerHeight * devicePixelRatio;

  state.canvas.style.width = `${innerWidth}px`;
  state.canvas.style.height = `${innerHeight}px`;
}

init();
