// Configure slider
const slider = document.querySelector("#condition-slider");
const sliderValue = document.querySelector("#slider-value");

slider.oninput = function() {
    sliderValue.innerHTML = this.value / 10;
}

// Configure bundle pop-up modal
const bundleModal = document.querySelector("#bundle-backdrop");
const bundleOpenButton = document.querySelector(".view-bundle");
const bundleCloseButton = document.querySelector("#bundle-close");

bundleOpenButton.onclick = function() {
    bundleModal.style.display = "block";
}

bundleCloseButton.onclick = function() {
    bundleModal.style.display = "none";
}

// Configure seller-info pop-up modal
const sellerModal = document.querySelector("#seller-backdrop");
const sellerOpenButtons = document.querySelectorAll(".contact-seller");
const sellerCloseButton = document.querySelector("#seller-close");

for (let i = 0; i < sellerOpenButtons.length; i++) {
    sellerOpenButtons[i].onclick = function() {
        sellerModal.style.display = "block";
    }
}

sellerCloseButton.onclick = function () {
    sellerModal.style.display = "none";
}
