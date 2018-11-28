"use strict"; 
const bundleModal = document.querySelector("#bundle-backdrop");
const editModal = document.querySelector("#edit-backdrop");
const bundleOpenButton = document.querySelector(".view-bundle");
const bundleCloseButton = document.querySelector("#bundle-close");
const editCloseButton = document.querySelector("#edit-close");
const listings = document.querySelector('#results');
const editlisting = document.querySelector('#edit-backdrop');
let listingToBeEdited;
listings.addEventListener('click', remove_listings)
listings.addEventListener('click', edit_listings)
editlisting.addEventListener('click', submit_edited_listings)


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
		const listingToRemove = e.target.parentElement.parentElement
		listings.removeChild(listingToRemove)

	}

}
function edit_listings(e){
	e.preventDefault()
	if (e.target.classList.contains('edit-listing')) {
	     editModal.style.display = "block";
	     listingToBeEdited = e.target.parentElement.parentElement
	     console.log(listingToBeEdited)
	}
	
}
function submit_edited_listings(e){
	e.preventDefault()
	if (e.target.classList.contains('submit-edit-listing')) {
	     const editfields = e.target.parentElement.parentElement
	     listingToBeEdited.getElementsByClassName("book-title")[0].textContent = editfields.querySelector("#edit-title-input").value
	     listingToBeEdited.getElementsByClassName("book-authors")[0].textContent = editfields.querySelector("#edit-author-input").value
	     listingToBeEdited.getElementsByClassName("book-courses")[0].textContent = editfields.querySelector("#edit-course-input").value
	     listingToBeEdited.getElementsByClassName("book-condition")[0].textContent = editfields.querySelector("#edit-condition-input").value
	     listingToBeEdited.getElementsByClassName("book-description")[0].textContent = editfields.querySelector("#edit-description-input").value
	     listingToBeEdited.getElementsByClassName("book-price")[0].textContent = editfields.querySelector("#edit-price-input").value
	     editModal.style.display = "none";
	}

}