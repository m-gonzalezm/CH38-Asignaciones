const HTML = document.documentElement;
const CODE_BOX = document.querySelector(".code-box");
const JOIN_BTN = document.querySelector(".join-btn");
const pointer = {
  x: 0,
  y: 0
};
let isDebugModeActive = false;

const setElementStyles = (element, ...restParameters) => {
  for (let index = 0; index < restParameters.length; ) {
    element.style.setProperty(restParameters[index++], restParameters[index++]);
  }
}

const renderRadGradient = radius => {
  const origin = CODE_BOX.getBoundingClientRect();
  setElementStyles(HTML, "--rad-gradient", `circle at ${pointer.x - Math.floor(origin.left)}px ${pointer.y - Math.floor(origin.top)}px, transparent, #1F1F1F ${radius}px`);
};

const fadeRadGradientOut = async () => {
  for (let radius = 125; radius >= 0; radius -= 5) {
    await new Promise(resolve => setTimeout(() => resolve(), 0));
    if (isDebugModeActive) break;
    renderRadGradient(radius);
  }
};

JOIN_BTN.addEventListener("click", event => {
  setTimeout(() => setElementStyles(HTML, "--word-spacing", "0", "--word-transition", "padding-right 60s linear"), 2000);
  setElementStyles(HTML, "--word-spacing", "7.7px", "--word-transition", "padding-right 0.3s ease-out");
});

const sequenceDebugMode = state => {
  isDebugModeActive = !state;
  document.body.style.pointerEvents = HTML.style.cursor = state ? "auto" : "none";
  document.querySelector(".hint").innerHTML = state ? "Press any key to enter debug mode" : "Press Esc to leave debug mode";
  state ? fadeRadGradientOut() : renderRadGradient(125);
  JOIN_BTN.style.backgroundColor = state ? "rgba(36, 137, 219, 0.51)" : "transparent"; // Animación
  JOIN_BTN.style.animation = state ? "waiting-for-typing 1s steps(2, end) infinite" : "none";
  CODE_BOX.style.userSelect = state ? "none" : "auto";
};

document.addEventListener("keyup", event => {
  sequenceDebugMode(event.key === "Escape" && isDebugModeActive);
});

document.addEventListener("mousemove", event => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  if (isDebugModeActive) renderRadGradient(125);
});