"use strict";
const bundleModal = document.querySelector("#bundle-backdrop");
const editModal = document.querySelector("#edit-backdrop");
//const bundleOpenButton = document.querySelector(".view-bundle");
//const bundleOpenButtons = document.querySelectorAll(".view-bundle");

const bundleCloseButton = document.querySelector("#bundle-close");
const editCloseButton = document.querySelector("#edit-close");
const listings = document.querySelector('#results');
let editlisting = document.querySelector('#edit-backdrop');
let bundleEditing = false

let editModalBody = editlisting.getElementsByClassName("modal-content")[0]
let initialeditModal = editModalBody.cloneNode(true)
let listingToBeEdited;
listings.addEventListener('click', remove_listings)
listings.addEventListener('click', edit_listings)
editlisting.addEventListener('click', submit_edited_listings)

//const bundleModals = document.querySelectorAll(".bundle-backdrop");



//bundleOpenButton.onclick = function() {
//    bundleModal.style.display = "block";
//}
//
//bundleCloseButton.onclick = function() {
//    bundleModal.style.display = "none";
//}

editCloseButton.onclick = function() {
    editModal.style.display = "none";
    editModal.removeChild(editModalBody)
	editModal.appendChild(initialeditModal)
	editModalBody = editlisting.getElementsByClassName("modal-content")[0]
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
	initialeditModal = editModalBody.cloneNode(true)
	if (e.target.classList.contains('edit-listing')) {
		if (e.target.parentElement.parentElement.classList.contains('bundle')){
            bundleEditing = true
			editlisting.querySelector("#bundle-title").textContent = "Edit your bundle"
			const bundleinfo = document.createElement('div')
            bundleinfo.classList.add('bundleinfo')
            const bundeltitle = document.createElement('span')
	             bundeltitle.classList.add('bold')
	             bundeltitle.classList.add('edit-bundeltitle')
	             bundeltitle.textContent = "Bundle Title:"
	              const bundeltitleinput = document.createElement('input')
	              bundeltitleinput.classList.add('edit-bundeltitle-input')
	              bundeltitleinput.setAttribute("name", "bundeltitle")
	              bundeltitleinput.setAttribute("type", "text")
	              bundeltitleinput.classList.add('input')
	              bundleinfo.appendChild(bundeltitle)
	              bundleinfo.appendChild(bundeltitleinput)
	              const bundeldescr = document.createElement('span')
                 bundeldescr.classList.add('bold')
                 bundeldescr.classList.add('edit-bundeldescr')
                 bundeldescr.textContent = "Bundle Description:"
                  const bundeldescrinput = document.createElement('input')
                  bundeldescrinput.classList.add('edit-bundeldescr-input')
                  bundeldescrinput.setAttribute("name", "bundeldescr")
                  bundeldescrinput.setAttribute("type", "text")
                  bundeldescrinput.classList.add('input')
                  bundleinfo.appendChild(bundeldescr)
                  bundleinfo.appendChild(bundeldescrinput)
                  editModalBody.getElementsByClassName("modal-top-container")[0].appendChild(bundleinfo)


			editlisting.getElementsByClassName("edit-title-input")[0].value
			= bundleModal.getElementsByClassName("book-info-container")[0].getElementsByClassName("book-title")[0].textContent
			editlisting.getElementsByClassName("edit-author-input")[0].value
			= bundleModal.getElementsByClassName("book-info-container")[0].getElementsByClassName("book-authors")[0].textContent
			editlisting.getElementsByClassName("edit-course-input")[0].value
			= bundleModal.getElementsByClassName("book-info-container")[0].getElementsByClassName("book-courses")[0].textContent
			editlisting.getElementsByClassName("edit-condition-input")[0].value
			= bundleModal.getElementsByClassName("book-info-container")[0].getElementsByClassName("book-condition")[0].textContent
			editlisting.getElementsByClassName("edit-description-input")[0].value
			= bundleModal.getElementsByClassName("book-info-container")[0].getElementsByClassName("book-description")[0].textContent.trim()
			for (let i = 1; i < bundleModal.getElementsByClassName("book-info-container").length; i++) {
                 const edit = document.createElement('div')
                 edit.classList.add('edit')
                 const textbook = document.createElement('span')
	             textbook.classList.add('bold')
	             textbook.classList.add('textbook')
	             textbook.textContent = "Textbook"+ (i+1)
	             edit.appendChild(textbook)
                 const title = document.createElement('div')
                 title.classList.add('title')
                 const titleSpan = document.createElement('span')
	             titleSpan.classList.add('bold')
	             titleSpan.classList.add('edit-title')
	             titleSpan.textContent = "Title:"
	              const titleinput = document.createElement('input')
	              titleinput.classList.add('edit-title-input')
	              titleinput.setAttribute("name", "title")
	              titleinput.setAttribute("type", "text")
	              titleinput.classList.add('input')
	              title.appendChild(titleSpan)
	              title.appendChild(titleinput)
	              edit.appendChild(title)
	               const author = document.createElement('div')
                 author.classList.add('author')
                 const authorSpan = document.createElement('span')
	             authorSpan.classList.add('bold')
	             authorSpan.classList.add('edit-author')
	             authorSpan.textContent = "author:"
	              const authorinput = document.createElement('input')
	              authorinput.classList.add('edit-author-input')
	              authorinput.setAttribute("name", "author")
	              authorinput.setAttribute("type", "text")
	              authorinput.classList.add('input')
	              author.appendChild(authorSpan)
	              author.appendChild(authorinput)
	              edit.appendChild(author)
	              const course = document.createElement('div')
                 course.classList.add('course')
                 const courseSpan = document.createElement('span')
	             courseSpan.classList.add('bold')
	             courseSpan.classList.add('edit-course')
	             courseSpan.textContent = "course:"
	              const courseinput = document.createElement('input')
	              courseinput.classList.add('edit-course-input')
	              courseinput.setAttribute("name", "course")
	              courseinput.setAttribute("type", "text")
	              courseinput.classList.add('input')
	              course.appendChild(courseSpan)
	              course.appendChild(courseinput)
	              edit.appendChild(course)
	               const condition = document.createElement('div')
                 condition.classList.add('condition')
                 const conditionSpan = document.createElement('span')
	             conditionSpan.classList.add('bold')
	             conditionSpan.classList.add('edit-condition')
	             conditionSpan.textContent = "condition:"
	              const conditioninput = document.createElement('input')
	              conditioninput.classList.add('edit-condition-input')
	              conditioninput.setAttribute("name", "condition")
	              conditioninput.setAttribute("type", "text")
	              conditioninput.classList.add('input')
	              condition.appendChild(conditionSpan)
	              condition.appendChild(conditioninput)
	              edit.appendChild(condition)
	              const image = document.createElement('div')
                 image.classList.add('image')
                 const imageSpan = document.createElement('span')
	             imageSpan.classList.add('bold')
	             imageSpan.classList.add('edit-image')
	             imageSpan.textContent = "image:"
	              const imageinput = document.createElement('input')
	              imageinput.classList.add('edit-image-input')
	              imageinput.setAttribute("name", "image")
	              imageinput.setAttribute("type", "text")
	              imageinput.classList.add('input')
	              image.appendChild(imageSpan)
	              image.appendChild(imageinput)
	              edit.appendChild(image)
	              const description = document.createElement('div')
                 description.classList.add('description')
                 const descriptionSpan = document.createElement('span')
	             descriptionSpan.classList.add('bold')
	             descriptionSpan.classList.add('edit-description')
	             descriptionSpan.textContent = "description:"
	              const descriptioninput = document.createElement('input')
	              descriptioninput.classList.add('edit-description-input')
	              descriptioninput.setAttribute("name", "description")
	              descriptioninput.setAttribute("type", "text")
	              descriptioninput.classList.add('input')
	              description.appendChild(descriptionSpan)
	              description.appendChild(descriptioninput)
	              edit.appendChild(description)
	              editModalBody.appendChild(edit)
	              editlisting = document.querySelector('#edit-backdrop');
	              editlisting.getElementsByClassName("edit-title-input")[i].value
			= bundleModal.getElementsByClassName("book-info-container")[i].getElementsByClassName("book-title")[0].textContent
			editlisting.getElementsByClassName("edit-author-input")[i].value
			= bundleModal.getElementsByClassName("book-info-container")[i].getElementsByClassName("book-authors")[0].textContent
			editlisting.getElementsByClassName("edit-course-input")[i].value
			= bundleModal.getElementsByClassName("book-info-container")[i].getElementsByClassName("book-courses")[0].textContent
			editlisting.getElementsByClassName("edit-condition-input")[i].value
			= bundleModal.getElementsByClassName("book-info-container")[i].getElementsByClassName("book-condition")[0].textContent
			editlisting.getElementsByClassName("edit-description-input")[i].value
			= bundleModal.getElementsByClassName("book-info-container")[i].getElementsByClassName("book-description")[0].textContent.trim()

               }
               const price = document.createElement('div')
		 	price.classList.add("price")
		 	const priceSpan = document.createElement('span')

		 	priceSpan.classList.add("edit-price")
		 	priceSpan.classList.add("bold")
		 	priceSpan.textContent = "Price:"
		 	const priceinput = document.createElement('input')
	              priceinput.classList.add('edit-price-input')
	              priceinput.setAttribute("name", "price")
	              priceinput.setAttribute("type", "text")
	              priceinput.classList.add('input')
	        price.appendChild(priceSpan)
	        price.appendChild(priceinput)
	        const button = document.createElement('button')
	        button.classList.add("submit-edit-listing")
	        button.classList.add("listing-action")
	        button.classList.add("button")
	        button.textContent = "Submit"
	        editModalBody.appendChild(price)
	        editModalBody.appendChild(button)
		}

		 else{
		 	const price = document.createElement('div')
		 	price.classList.add("price")
		 	const priceSpan = document.createElement('span')

		 	priceSpan.classList.add("edit-price")
		 	priceSpan.classList.add("bold")
		 	priceSpan.textContent = "Price:"
		 	const priceinput = document.createElement('input')
	              priceinput.classList.add('edit-price-input')
	              priceinput.setAttribute("name", "price")
	              priceinput.setAttribute("type", "text")
	              priceinput.classList.add('input')
	        price.appendChild(priceSpan)
	        price.appendChild(priceinput)
	        const button = document.createElement('button')
	        button.classList.add("submit-edit-listing")
	        button.classList.add("listing-action")
	        button.classList.add("button")
	        button.textContent = "Submit"
	        editModalBody.appendChild(price)
	        editModalBody.appendChild(button)
		 }

	     editModal.style.display = "block";
	     listingToBeEdited = e.target.parentElement.parentElement
	}

}
function submit_edited_listings(e){
	e.preventDefault()
	const editfields = e.target.parentElement.parentElement
	if (e.target.classList.contains('submit-edit-listing')) {
		if (bundleEditing){
			for (let i = 0; i < bundleModal.getElementsByClassName("book-info-container").length; i++) {
				 bundleModal.getElementsByClassName("book-title")[i].textContent = editlisting.getElementsByClassName("edit-title-input")[i].value
	             bundleModal.getElementsByClassName("book-authors")[i].textContent = editlisting.getElementsByClassName("edit-author-input")[i].value
	             bundleModal.getElementsByClassName("book-courses")[i].textContent = editlisting.getElementsByClassName("edit-course-input")[i].value
	             bundleModal.getElementsByClassName("book-condition")[i].textContent = editlisting.getElementsByClassName("edit-condition-input")[i].value
	             bundleModal.getElementsByClassName("book-description")[i].textContent = editlisting.getElementsByClassName("edit-description-input")[i].value

			}
			listingToBeEdited.getElementsByClassName("book-title")[0].textContent = editfields.getElementsByClassName("edit-bundeltitle-input")[0].value
			listingToBeEdited.getElementsByClassName("book-description")[0].textContent = editfields.getElementsByClassName("edit-bundeldescr-input")[0].value
			listingToBeEdited.getElementsByClassName("book-price")[0].textContent = editfields.getElementsByClassName("edit-price-input")[0].value
            bundleModal.querySelector("#bundle-title").textContent = editfields.getElementsByClassName("edit-bundeltitle-input")[0].value
            bundleModal.querySelector("#bundle-price").textContent = editfields.getElementsByClassName("edit-bundeldescr-input")[0].value
            bundleEditing = false
		}

		else{

	     listingToBeEdited.getElementsByClassName("book-title")[0].textContent = editfields.getElementsByClassName("edit-title-input")[0].value
	     listingToBeEdited.getElementsByClassName("book-authors")[0].textContent = editfields.getElementsByClassName("edit-author-input")[0].value
	     listingToBeEdited.getElementsByClassName("book-courses")[0].textContent = editfields.getElementsByClassName("edit-course-input")[0].value
	     listingToBeEdited.getElementsByClassName("book-condition")[0].textContent = editfields.getElementsByClassName("edit-condition-input")[0].value
	     listingToBeEdited.getElementsByClassName("book-description")[0].textContent = editfields.getElementsByClassName("edit-description-input")[0].value
	     listingToBeEdited.getElementsByClassName("book-price")[0].textContent = editfields.getElementsByClassName("edit-price-input")[0].value
		}

	     editModal.removeChild(editModalBody)
	     editModal.appendChild(initialeditModal)
	     editModalBody = editlisting.getElementsByClassName("modal-content")[0]
	     editModal.style.display = "none";
	}

}
