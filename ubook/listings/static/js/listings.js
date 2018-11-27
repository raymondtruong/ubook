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
