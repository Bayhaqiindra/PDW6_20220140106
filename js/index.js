// Impor elemen-elemen yang dibutuhkan dari file "elements.js"
import {
  onVideo,
  noVideo,
  video,
  eye,
  noEye,
  main,
  play,
  pause,
  left,
  right,
  durationVideo,
  image,
  nameTitle,
  nameAlbum
} from "./elements.js";

// Daftar video beserta informasinya
const videos = [
  { id: 1, title: 'Plush', album: 'Stone Temple Pilots', src: './videos/Stone Temple Pilots - Plush.mp4', img: 'images/stone.jpeg' },
  { id: 2, title: 'I Miss You', album: 'Blink-182', src: './videos/blink-182 - I Miss You.mp4', img: 'images/Blink-182.jpg' },
  { id: 3, title: 'What A Fool Believes', album: 'The Doobie Brothers', src: './videos/The Doobie Brothers - What A Fool Believes.mp4', img: 'images/The_Doobie_Brothers.jpg' }
];

// Indeks video yang sedang diputar
let indexVideo = 0;

// Render video pertama kali
videoRender(indexVideo);

// Event listener untuk tombol putar
play.addEventListener('click', playVideo);

// Event listener untuk tombol jeda
pause.addEventListener('click', pauseVideo);

// Event listener untuk tombol menampilkan video
onVideo.addEventListener('click', startVideo);

// Event listener untuk tombol menyembunyikan video
noVideo.addEventListener('click', offVideo);

// Event listener untuk tombol menampilkan gambar
eye.addEventListener('click', startEye);

// Event listener untuk tombol menyembunyikan gambar
noEye.addEventListener('click', offEye);

// Event listener untuk update bar saat video diputar
video.addEventListener('timeupdate', updateBar);

// Event listener untuk tombol navigasi ke kiri
left.addEventListener('click', () => {
  indexVideo--;
  if (indexVideo < 0) {
    indexVideo = 2;
  }
  videoRender(indexVideo);
  pauseVideo();
});

// Event listener untuk tombol navigasi ke kanan
right.addEventListener('click', () => {
  indexVideo++;
  if (indexVideo > 2) {
    indexVideo = 0;
  }
  videoRender(indexVideo);
  pauseVideo();
});

// Fungsi untuk merender video dan informasinya
function videoRender(index) {
  video.setAttribute('src', videos[index].src);
  updateTitle(videos[index].title);
  updateAlbum(videos[index].album);
  updateImage(videos[index].img);
  video.addEventListener('loadeddata', () => {
    durationVideo.textContent = String(secondsToMinutes(Math.floor(video.duration))).padStart(2, "0");
  });
}

// Fungsi untuk memperbarui judul video
function updateTitle(title) {
  nameTitle.textContent = title;
}

// Fungsi untuk memperbarui nama album
function updateAlbum(album) {
  nameAlbum.textContent = album;
}

// Fungsi untuk memperbarui gambar album
function updateImage(imageSrc) {
  image.src = imageSrc;
}

// Fungsi untuk memutar video
function playVideo() {
  video.play();
  pause.classList.remove('hide');
  play.classList.add('hide');
}

// Fungsi untuk menjeda video
function pauseVideo() {
  video.pause();
  play.classList.remove('hide');
  pause.classList.add('hide');
}

// Fungsi untuk menampilkan video
function startVideo() {
  video.classList.remove('opacity');
  noVideo.classList.remove('hide');
  onVideo.classList.add('hide');
}

// Fungsi untuk menyembunyikan video
function offVideo() {
  video.classList.add('opacity');
  onVideo.classList.remove('hide');
  noVideo.classList.add('hide');
}

// Fungsi untuk menampilkan gambar
function startEye() {
  main.classList.add('hide');
  noEye.classList.remove('hide');
  eye.classList.add('hide');
}

// Fungsi untuk menyembunyikan gambar
function offEye() {
  main.classList.remove('hide');
  eye.classList.remove('hide');
  noEye.classList.add('hide');
}

// Fungsi untuk mengubah detik menjadi menit:detik
function secondsToMinutes(seconds) {
  let campMinutes = Math.floor(seconds / 60);
  let campSeconds = seconds % 60;
  if (campSeconds < 10) {
    campSeconds = '0' + campSeconds;
  }

  return campMinutes + ':' + campSeconds;
}

// Fungsi untuk memperbarui progress bar video
function updateBar() {
  let bar = document.querySelector('progress');
  bar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
  let elapsedTime = document.querySelector('#start');
  elapsedTime.textContent = String(secondsToMinutes(Math.floor(video.currentTime))).padStart(2, "0");
}
