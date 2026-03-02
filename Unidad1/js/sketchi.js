let posciciones = [];
let velocidad = 5;
let aceleracion = 0.58;

function draw() {
  background(240);
  for (let i = 0; i < posciciones.length; i++) {
    fill(100, 180, 255, 150);
    noStroke();
    circle(posciciones[i], height / 2, 50);
  }
}
function mausePressed() {
  posciciones.push(mouseX);
  posciciones.push(mouseY);
}