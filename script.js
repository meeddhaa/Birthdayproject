// script.js

// Function to play music continuously
// Function to launch confetti
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Example: launch confetti when page loads
window.addEventListener("DOMContentLoaded", () => {
  launchConfetti();
});

window.addEventListener("DOMContentLoaded", function() {
  const music = document.getElementById("birthdayMusic");

  // Check if music was already playing
  if (!localStorage.getItem("musicPlaying")) {
    music.play();
    localStorage.setItem("musicPlaying", "true"); // mark as playing
  } else {
    music.play(); // resume playing on new page
  }
});
