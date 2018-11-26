"use strict"; 
const listings = document.querySelector('#results')
listings.addEventListener('click', remove_listings)
function remove_listings(e){
	e.preventDefault()
	if (e.target.classList.contains('x')) {
        console.log(e.target)	
		const listingToRemove = e.target.parentElement.parentElement
		listings.removeChild(listingToRemove)

	}

}