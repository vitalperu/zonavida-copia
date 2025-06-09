// Tooltips de Materialize y carrusel por si lo usas
$(document).ready(function(){
  var tooltips = document.querySelectorAll('.tooltipped');
  if (window.M && window.M.Tooltip) {
    M.Tooltip.init(tooltips);
  }
});

// Control de volumen con barra e icono dinámico
document.addEventListener("DOMContentLoaded", function() {
  const player = document.getElementById('player');
  const volumeBar = document.getElementById('volumeBar');
  const volIcon = document.getElementById('volIcon');

  if (volumeBar && player && volIcon) {
    player.volume = volumeBar.value;
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
