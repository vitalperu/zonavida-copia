// Inicialización de carrusel (por si vuelves a usarlo)
$(document).ready(function(){
  $('.carousel').carousel({
    fullWidth: true,
  });
  // Inicialización de tooltips para los botones sociales
  var tooltips = document.querySelectorAll('.tooltipped');
  if (window.M && window.M.Tooltip) {
    M.Tooltip.init(tooltips);
  }
});

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// Control de volumen con barra e icono dinámico
document.addEventListener("DOMContentLoaded", function() {
  const player = document.getElementById('player');
  const volumeBar = document.getElementById('volumeBar');
  const volIcon = document.getElementById('volIcon');

  if (volumeBar && player && volIcon) {
    volumeBar.addEventListener('input', () => {
      player.volume = volumeBar.value;
      if (player.volume == 0) {
        volIcon.innerHTML = '<i class="material-icons">volume_off</i>';
      } else if (player.volume < 0.5) {
        volIcon.innerHTML = '<i class="material-icons">volume_down</i>';
      } else {
        volIcon.innerHTML = '<i class="material-icons">volume_up</i>';
      }
    });
  }
});
