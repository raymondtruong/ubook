const slider = document.querySelector("#condition-slider");
const sliderValue = document.querySelector("#slider-value");

// Update slider
slider.oninput = function() {
    sliderValue.innerHTML = this.value / 10;
}
