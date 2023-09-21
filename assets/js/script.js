

// window.addEventListener("load", function () {

//   document.getElementById("loader").style.display = "none";
// });

// const video = document.getElementById('background-video');
// document.addEventListener('DOMContentLoaded', () => {
//   video.play().catch((error) => {
  
//     console.error('Autoplay not allowed:', error);
//   });
// });

// Get the audio element
var audio = document.getElementById("myAudio");

// Get the toggle button
var toggleBtn = document.getElementById("toggleBtn");

// Add event listener to the toggle button
toggleBtn.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    toggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    audio.pause();
    toggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> ';
  }
});

// Add event listener to the audio element to update the toggle button icon when the audio is paused
audio.addEventListener("pause", function() {
  toggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>  ';
});

// Add event listener to the audio element to update the toggle button icon when the audio is playing
audio.addEventListener("play", function() {
  toggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
});