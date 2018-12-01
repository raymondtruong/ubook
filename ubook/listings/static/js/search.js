// Configure slider
const slider = document.querySelector("#condition-slider");
const sliderValue = document.querySelector("#slider-value");

slider.oninput = function() {
    sliderValue.innerHTML = this.value / 2;
}

// Configure bundle pop-up modal
const bundleModals = document.querySelectorAll(".bundle-backdrop");
const bundleModal = document.querySelector("#bundle-backdrop");
const bundleBackdropTextbook = document.querySelector("#bundle-backdrop-textbooks");

const bundleBackdropTitle = document.querySelector("#bundle-title");
const bundleBackdropPrice = document.querySelector("#bundle-price");
const bundleBackdropEmail = document.querySelector("#bundle-backdrop-email");
const bundleBackdropPhone = document.querySelector("#bundle-backdrop-phone");

const bundleOpenButtons = document.querySelectorAll(".view-bundle");

const bundleTitles = document.querySelectorAll(".bundle-title");
const bundlePrices = document.querySelectorAll(".bundle-price");
const bundleEmails = document.querySelectorAll(".bundle-email");
const bundlePhones = document.querySelectorAll(".bundle-phone");


const bundleCloseButtons = document.querySelectorAll(".bundle-close");
if (bundleOpenButtons != null){
    for(let i = 0; i < bundleOpenButtons.length; i++){
        bundleOpenButtons[i].onclick = function() {
            bundleModal.innerHTML = bundleModals[i].innerHTML;
            bundleModal.style.display = "block";
            const bundleCloseButtons = document.querySelectorAll(".bundle-close");
            for(let i = 0; i < bundleCloseButtons.length; i++){
                bundleCloseButtons[i].onclick = function() {
                    bundleModal.style.display = "none";
                }
            }
        }
    }
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


for (let i = 0; i < sellerOpenButtons.length; i++) {
    sellerOpenButtons[i].onclick = function() {
        sellerModal.style.display = "block";
        sellerEmailBackdrop.innerHTML = sellerEmails[i].innerHTML;
        sellerPhoneBackdrop.innerHTML = sellerPhones[i].innerHTML;
        console.log(sellerPhoneBackdrop.innerHTML)
    }
}

sellerCloseButton.onclick = function () {
    sellerModal.style.display = "none";
}
