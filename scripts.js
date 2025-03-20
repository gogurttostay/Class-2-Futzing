const slider = document.getElementById("seaLevelSlider");
const images = document.querySelectorAll(".sea-level");

slider.addEventListener("input", () => {
    images.forEach((img, index) => {
        img.style.opacity = index == slider.value ? "1" : "0";
    });
});