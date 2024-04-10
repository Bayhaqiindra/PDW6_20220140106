// Mengimpor elemen-elemen yang diperlukan dari DOM
const onVideo = document.querySelector('.video'); // Tombol untuk menampilkan video
const noVideo = document.querySelector('.noVideo'); // Tombol untuk menyembunyikan video
const video = document.querySelector('video'); // Elemen video
const eye = document.querySelector('.eye'); // Tombol untuk menampilkan gambar
const noEye = document.querySelector('.noEye'); // Tombol untuk menyembunyikan gambar
const main = document.querySelector('main'); // Elemen utama
const play = document.querySelector('.play'); // Tombol putar
const pause = document.querySelector('.pause'); // Tombol jeda
const left = document.querySelector('.left'); // Tombol navigasi ke kiri
const right = document.querySelector('.right'); // Tombol navigasi ke kanan
let durationVideo = document.querySelector('#end'); // Durasi video
let image = document.querySelector('img'); // Gambar album
let nameTitle = document.querySelector('.info h2'); // Judul lagu
let nameAlbum = document.querySelector('.info p'); // Nama album

// Ekspor elemen-elemen tersebut untuk digunakan di file lain
export {
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
};
