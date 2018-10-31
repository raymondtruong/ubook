const slider = document.querySelector("#condition-slider");
const sliderValue = document.querySelector("#slider-value");

// Update slider
slider.oninput = function() {
    sliderValue.innerHTML = this.value / 10;
}

// Get the modal
var modal = document.getElementById('modal-backdrop');

// Get the button that opens the modal
const btn = document.querySelector(".view-bundle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
