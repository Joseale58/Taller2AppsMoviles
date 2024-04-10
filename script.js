let audioPlayer = document.getElementById('audio-player');
let btnPlay = document.getElementById('btn_play');
let btnPause = document.getElementById('btn_pause');
let btnPrevious = document.getElementById('btn_previous');
let btnNext = document.getElementById('btn_next');
let controlVolumen = document.getElementById('control_volumen');
let controlStereo = document.getElementById('control_stereo');
let songLogo = document.getElementById('song-logo');
let songTitle = document.getElementById('song-title');
let songSubtitle = document.getElementById('song-subtitle');

let songs = [
  { title: "Without me", subtitle: "Eminem", file: "withoutme.mp3", logo: "./images/emin.jpg" },
  { title: "Bellaquita", subtitle: "Lenny Tavarez, Dalex, Anitta", file: "bellaquita.mp3", logo: "./images/bellaquita.jpg" },
  { title: "Ahora Dice", subtitle: "J Balvin, Ozuna, Chris Jedi", file: "ahoradice.mp3", logo: "./images/ad.jpg" },
  { title: "Esclava", subtitle: "Bryant Myers, Anonimus, Anuel AA", file: "esclava.mp3", logo: "./images/es.jpg" }
];

let currentSongIndex = 0;

function playSong() {
  let currentSong = songs[currentSongIndex];
  audioPlayer.src = `./audio/${currentSong.file}`;
  songTitle.textContent = currentSong.title;
  songSubtitle.textContent = currentSong.subtitle; // Modificado para incluir el subtítulo
  songLogo.src = currentSong.logo;
  audioPlayer.play();
  btnPlay.classList.add('ocultar');
  btnPause.classList.remove('ocultar');
}

btnPrevious.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong();
});

btnNext.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong();
});

btnPlay.addEventListener('click', () => {
  playSong();
});

btnPause.addEventListener('click', () => {
 audioPlayer.pause();
 btnPlay.classList.remove('ocultar');
 btnPause.classList.add('ocultar');
});

controlVolumen.addEventListener('input', () => {
 audioPlayer.volume = controlVolumen.value;
 localStorage.setItem('volumen', controlVolumen.value);
});

controlStereo.addEventListener('input', () => {
 audioPlayer.currentTime = controlStereo.value;
});

// Cargar volumen guardado en localStorage
let volumen = localStorage.getItem('volumen');
if (volumen) {
 controlVolumen.value = volumen;
 audioPlayer.volume = volumen;
}
