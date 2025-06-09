document.addEventListener("DOMContentLoaded", function () {
  var tooltips = document.querySelectorAll(".tooltipped");
  if (window.M && window.M.Tooltip) {
    M.Tooltip.init(tooltips);
  }

  const player = document.getElementById("player");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playPauseIcon = document.getElementById("playPauseIcon");
  const volumeBar = document.getElementById("volumeBar");
  const volIcon = document.getElementById("volIcon");
  const volValue = document.getElementById("volValue");

  player.volume = volumeBar.value;
  volValue.textContent = Math.round(volumeBar.value * 100) + "%";

  // Play / Pause con mismo botón
  playPauseBtn.addEventListener("click", () => {
    if (player.paused) {
      player.load(); // importante en streaming
      player.play()
        .then(() => {
          playPauseIcon.textContent = "pause";
        })
        .catch(err => {
          console.error("Error al reproducir:", err);
          alert("Debe autorizar audio en su navegador.");
        });
    } else {
      player.pause();
      playPauseIcon.textContent = "play_arrow";
    }
  });

  // Control de volumen
  volumeBar.addEventListener("input", () => {
    player.volume = volumeBar.value;
    volValue.textContent = Math.round(volumeBar.value * 100) + "%";

    if (player.volume == 0) {
      volIcon.innerHTML = '<i class="material-icons">volume_off</i>';
    } else if (player.volume < 0.5) {
      volIcon.innerHTML = '<i class="material-icons">volume_down</i>';
    } else {
      volIcon.innerHTML = '<i class="material-icons">volume_up</i>';
    }
  });

  // Mute/Unmute al hacer clic en ícono
  volIcon.addEventListener("click", () => {
    if (player.volume > 0) {
      player.dataset.lastVolume = player.volume;
      player.volume = 0;
      volumeBar.value = 0;
      volIcon.innerHTML = '<i class="material-icons">volume_off</i>';
      volValue.textContent = "0%";
    } else {
      player.volume = player.dataset.lastVolume || 1;
      volumeBar.value = player.volume;
      volValue.textContent = Math.round(player.volume * 100) + "%";
      if (player.volume < 0.5) {
        volIcon.innerHTML = '<i class="material-icons">volume_down</i>';
      } else {
        volIcon.innerHTML = '<i class="material-icons">volume_up</i>';
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

});
