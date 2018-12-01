// Configure bundle pop-up modal
const bundleModal = document.querySelector("#bundle-backdrop");
const bundleModals = document.querySelectorAll(".bundle-backdrop");

const bundleOpenButtons = document.querySelectorAll(".view-bundle");
const bundleCloseButtons = document.querySelectorAll(".bundle-close");

//const editListingButtons = document.querySelectorAll(".edit-listing");

if (bundleOpenButtons != null){
    for(let i = 0; i < bundleOpenButtons.length; i++){
        bundleOpenButtons[i].onclick = function() {
            bundleModal.innerHTML = bundleModals[i].innerHTML;
//            console.log(bundleModals[i].innerHTML)
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

//if (editListingButtons != null){
//    for (let i = 0; i< editListingButtons.length ; i++){
//        editListingButtons[i].onclick = function(){
//            console.log("edit");
//        }
//    }
//}

