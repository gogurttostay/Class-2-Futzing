// This script handles the slider functionality for the sea level images
// It updates the displayed image based on the slider value

const slider = document.getElementById("seaLevelSlider");
const images = document.querySelectorAll(".sea-level");

function updateImages() {
  const value = parseInt(slider.value);
  images.forEach((img, index) => {
    img.style.opacity = index === value ? "1" : "0";
  });
}

updateImages(); // Show initial image

slider.addEventListener("input", updateImages);
