const state = {
  canvas: document.createElement("canvas")
};

function init() {
  addEventListener("resize", resize);
  document.body.appendChild(state.canvas);
  resize();
  update();
}

function update() {}

function resize() {
  state.canvas.width = innerWidth * devicePixelRatio;
  state.canvas.height = innerHeight * devicePixelRatio;

  state.canvas.style.width = `${innerWidth}px`;
  state.canvas.style.height = `${innerHeight}px`;
}

init();
