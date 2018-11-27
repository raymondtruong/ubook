"use strict"; 
const bundleModal = document.querySelector("#bundle-backdrop");
const editModal = document.querySelector("#edit-backdrop");
const bundleOpenButton = document.querySelector(".view-bundle");
const bundleCloseButton = document.querySelector("#bundle-close");
const editCloseButton = document.querySelector("#edit-close");
const listings = document.querySelector('#results');
listings.addEventListener('click', remove_listings)
listings.addEventListener('click', edit_listings)


bundleOpenButton.onclick = function() {
    bundleModal.style.display = "block";
}

bundleCloseButton.onclick = function() {
    bundleModal.style.display = "none";
}

editCloseButton.onclick = function() {
    editModal.style.display = "none";
}
function remove_listings(e){
	e.preventDefault()
	if (e.target.classList.contains('remove-listing')) {
        console.log(e.target)	
		const listingToRemove = e.target.parentElement.parentElement
		listings.removeChild(listingToRemove)

	}

}
function edit_listings(e){
	e.preventDefault()
	if (e.target.classList.contains('edit-listing')) {
	     editModal.style.display = "block";
	}
	
}