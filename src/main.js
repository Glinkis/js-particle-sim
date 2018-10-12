const state = {};

function init() {
  createCanvas();
  addEventListener("resize", resize);
  resize();
  update();
}

function update() {}

function createCanvas() {
  state.canvas = document.createElement("canvas");
  document.body.appendChild(state.canvas);
}

function resize() {
  state.canvas.width = innerWidth * devicePixelRatio;
  state.canvas.height = innerHeight * devicePixelRatio;

  state.canvas.style.width = `${innerWidth}px`;
  state.canvas.style.height = `${innerHeight}px`;
}

init();
