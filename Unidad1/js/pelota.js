let x = 0;
let velocidad = 3;          // píxeles por frame

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  
  fill(100, 180, 255);      // color azul claro
  noStroke();
  circle(x, 100, 50);
  
  // Actualizamos la posición
  x = x + velocidad;
  
  // Detectamos bordes y cambiamos dirección
  if (x > width - 25 || x < 25) {   // 25 = mitad del diámetro (radio)
    velocidad = velocidad * -1;     // invertimos el sentido
  }
}