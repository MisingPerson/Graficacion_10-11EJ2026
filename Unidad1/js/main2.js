document.addEventListener('DOMContentLoaded', () => {
  const saludo = document.getElementById('saludo');
  const boton = document.getElementById('btn-cambiar');

  const saludos = [
    "¡Hola, Mundo!",
    "¡Bienvenido al futuro!",
    "¡Qué bonito día para programar!",
    "¡Hola desde México! 🌮",
    "¡Todo es posible con código!",
    "¡Hoy es un gran día!",
    "¡Hola, persona increíble!"
  ];

  let indice = 0;

  boton.addEventListener('click', () => {
    indice = (indice + 1) % saludos.length;
    
    // Animación suave de cambio
    saludo.style.opacity = '0';
    
    setTimeout(() => {
      saludo.textContent = saludos[indice];
      saludo.style.opacity = '1';
      
      // Cambiar color aleatorio suave
      const colores = ['#0f3460', '#1a759f', '#4361ee', '#3f37c9', '#7209b7'];
      saludo.style.color = colores[indice % colores.length];
    }, 300);
  });
});