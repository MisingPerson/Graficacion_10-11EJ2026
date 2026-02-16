// js/main.js
document.addEventListener('DOMContentLoaded', () => {

  // ── Gráfico de barras ─────────────────────────────────────
  const ctxBar = document.getElementById('myChartBar').getContext('2d');
  
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [{
        label: 'Ventas (miles de pesos)',
        data: [1200, 1900, 3000, 2800, 4200, 3800],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 205, 86, 0.7)'
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 159, 64)',
          'rgb(153, 102, 255)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Monto (MXN)'
          }
        }
      }
    }
  });


  // ── Gráfico de pastel ─────────────────────────────────────
  const ctxPie = document.getElementById('myChartPie').getContext('2d');
  
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Nuevos', ' recurrentes', 'Inactivos', 'Leales'],
      datasets: [{
        data: [42, 28, 15, 15],
        backgroundColor: [
          '#36A2EB',
          '#FF6384',
          '#FFCE56',
          '#4BC0C0'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
  });

});