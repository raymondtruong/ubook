"use strict"; 
const bundleModal = document.querySelector("#bundle-backdrop");
const bundleOpenButton = document.querySelector(".view-bundle");
const bundleCloseButton = document.querySelector("#bundle-close");
const listings = document.querySelector('#results');
listings.addEventListener('click', remove_listings)

bundleOpenButton.onclick = function() {
    bundleModal.style.display = "block";
}

bundleCloseButton.onclick = function() {
    bundleModal.style.display = "none";
}
function remove_listings(e){
	e.preventDefault()
	if (e.target.classList.contains('remove-listing')) {
        console.log(e.target)	
		const listingToRemove = e.target.parentElement.parentElement
		listings.removeChild(listingToRemove)

	}

}