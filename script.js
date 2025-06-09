// Inicialización de Tooltips de Materialize
document.addEventListener("DOMContentLoaded", function() {
  const tooltips = document.querySelectorAll('.tooltipped');
  if (window.M && window.M.Tooltip) {
    M.Tooltip.init(tooltips);
  }

  // Control de volumen con barra e ícono dinámico
  const player = document.getElementById('player');
  const volumeBar = document.getElementById('volumeBar');
  const volIcon = document.getElementById('volIcon');

  if (player && volumeBar && volIcon) {
    // Establece volumen inicial
    player.volume = volumeBar.value;

    // Evento de cambio de volumen
    volumeBar.addEventListener('input', () => {
      player.volume = volumeBar.value;

      // Cambiar ícono según nivel de volumen
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
