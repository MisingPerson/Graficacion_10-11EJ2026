let x;
let velocidad = 5;
let aceleracion = 0.58;

function setup() {
  createCanvas(1200, 600);
  x = width / 2;
}

function draw() {
  background(220);
  
  fill(100, 180, 255);
  noStroke();
  circle(x, height / 2, 50);
  
  x += velocidad;
  
  if (x > width - 25 || x < 25) {
    velocidad *= -1.08;
    // Opcional: pequeño impulso extra al rebotar
    // velocidad *= 1.08;
  }
  
  // Control oscilante de velocidad (como un "efecto breathing")
  velocidad += aceleracion;
  
  if (abs(velocidad) > 25)  aceleracion *= -1;     // cambia dirección de aceleración
  if (abs(velocidad) < 5)   aceleracion *= -1;
}