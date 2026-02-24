let y;
let velocidad = 10;          

function setup() {
  createCanvas(400, 200);
  y = height / 2; 
}

function draw() {
  background(220);
  
  fill(100, 180, 255);      // color azul claro
  noStroke();
  circle(width / 2, y, 50);
  
  
  y = y + velocidad;
  
  // Detectamos bordes y cambiamos dirección
  if (y > height - 25 || y < 25) {   // 25 = mitad del diámetro (radio)
    velocidad = velocidad * -1;     // invertimos el sentido
  }
}