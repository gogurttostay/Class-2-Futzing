const slider = document.getElementById("seaLevelSlider");
const images = document.querySelectorAll(".sea-level");
const autoplayCheckbox = document.getElementById("autoplayCheckbox");
const waveOverlay = document.getElementById("wave-overlay");


let currentLevel = 0;
let autoplayInterval = null;

function showImage(level) {
  images.forEach((img, index) => {
    img.style.opacity = index === level ? "1" : "0";
  });
  slider.value = level;
  updateWave(level);
  updateSliderFill();
}

function updateSliderFill() {
  const percentage = (slider.value / 3) * 100;
  slider.style.background = `linear-gradient(to right, #007bff ${percentage}%, #ddd ${percentage}%)`;
}

function startAutoplay() {
  if (autoplayInterval) return;
  autoplayInterval = setInterval(() => {
    currentLevel = (currentLevel + 1) % images.length;
    showImage(currentLevel);
  }, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
}

// Handle slider changes
slider.addEventListener("input", () => {
  currentLevel = parseInt(slider.value);
  showImage(currentLevel);
});

// Handle toggle switch
autoplayCheckbox.addEventListener("change", () => {
  if (autoplayCheckbox.checked) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
});

// Handle wave overlay
function updateWave(level) {
  const percent = (level / 3) * 100;
  waveOverlay.style.height = `${percent}vh`;
}


// Init
showImage(currentLevel);
startAutoplay();
