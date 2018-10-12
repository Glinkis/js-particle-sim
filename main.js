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
  const { clientHeight, clientWidth } = document.documentElement;

  state.canvas.width = clientWidth * devicePixelRatio;
  state.canvas.height = clientHeight * devicePixelRatio;

  state.canvas.style.width = `${clientWidth}px`;
  state.canvas.style.height = `${clientHeight}px`;
}

init();
