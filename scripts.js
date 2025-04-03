// This script handles the slider functionality for the sea level images
// and updates the displayed image based on the slider value.
const slider = document.getElementById("seaLevelSlider");
const images = document.querySelectorAll(".sea-level");

slider.addEventListener("input", () => {
    images.forEach((img, index) => {
        img.style.opacity = index == slider.value ? "1" : "0";
    });
});
