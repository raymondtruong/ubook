// Configure bundle pop-up modal
const bundleModal = document.querySelector("#bundle-backdrop");
const bundleModals = document.querySelectorAll(".bundle-backdrop");

//const bundleOpenButton = document.querySelector(".view-bundle");
//const bundleCloseButton = document.querySelector("#bundle-close");

//bundleOpenButton.onclick = function() {
//    bundleModal.style.display = "block";
//}
//
//bundleCloseButton.onclick = function() {
//    bundleModal.style.display = "none";
//}
const bundleOpenButtons = document.querySelectorAll(".view-bundle");

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

