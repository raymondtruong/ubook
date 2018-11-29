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
if (bundleOpenButton != null){
    bundleOpenButton.onclick = function() {
        bundleModal.style.display = "block";
    }
}

bundleCloseButton.onclick = function() {
    bundleModal.style.display = "none";
}

// Configure seller-info pop-up modal
const sellerModal = document.querySelector("#seller-backdrop");
const sellerOpenButtons = document.querySelectorAll(".contact-seller");
// Added by Kory
const sellerEmailBackdrop = document.querySelector("#seller-backdrop-email");
const sellerPhoneBackdrop = document.querySelector("#seller-backdrop-phone");
const sellerEmails = document.querySelectorAll(".seller-email");
const sellerPhones = document.querySelectorAll(".seller-phone");
//

const sellerCloseButton = document.querySelector("#seller-close");
console.log(sellerOpenButtons)


for (let i = 0; i < sellerOpenButtons.length; i++) {
    sellerOpenButtons[i].onclick = function() {
        sellerModal.style.display = "block";
        sellerEmailBackdrop.innerHTML = sellerEmails[i].innerHTML;
        sellerPhoneBackdrop.innerHTML = sellerPhones[i].innerHTML;
    }
}

sellerCloseButton.onclick = function () {
    sellerModal.style.display = "none";
}
