"use strict";
const slider = document.querySelector("#condition-slider");
const sliderValue = document.querySelector("#slider-value");

slider.oninput = function() {
    sliderValue.innerHTML = this.value / 2;
}
//const mainContainer = document.querySelector("#main-container")
//mainContainer.addEventListener('click', add_textbook)
//
////const submit_button = document.querySelector("#submit_button")
////
////submit_button.addEventListener('click', function(){
////    let listing_title = document.querySelector("#listing_title").value
////    let listing_desc = document.querySelector("#listing_desc").value
////    console.log(listing_title)
////    console.log(listing_desc)
////})
//let i = 2
//function add_textbook(e){
//	e.preventDefault()
////	console.log("hi")
//	if (e.target.classList.contains("add-book")){
//		 mainContainer.removeChild(mainContainer.getElementsByClassName("buttons")[0])
//		 mainContainer.removeChild(mainContainer.getElementsByClassName("price")[0])
//		 const edit = document.createElement('div')
//                 edit.classList.add('edit')
//                 const textbook = document.createElement('span')
//	             textbook.classList.add('bold')
//	             textbook.classList.add('textbook')
//	             textbook.textContent = "Textbook" + " " + i
//	             i = i + 1
//	             edit.appendChild(textbook)
//                 const title = document.createElement('div')
//                 title.classList.add('title')
//                 const titleSpan = document.createElement('span')
//	             titleSpan.classList.add('bold')
//	             titleSpan.classList.add('edit-title')
//	             titleSpan.textContent = "Title:"
//	              const titleinput = document.createElement('input')
//	              titleinput.classList.add('edit-title-input')
//	              titleinput.setAttribute("name", "title")
//	              titleinput.setAttribute("type", "text")
//	              titleinput.classList.add('input')
//	              title.appendChild(titleSpan)
//	              title.appendChild(titleinput)
//	              edit.appendChild(title)
//	               const author = document.createElement('div')
//                 author.classList.add('author')
//                 const authorSpan = document.createElement('span')
//	             authorSpan.classList.add('bold')
//	             authorSpan.classList.add('edit-author')
//	             authorSpan.textContent = "Author:"
//	              const authorinput = document.createElement('input')
//	              authorinput.classList.add('edit-author-input')
//	              authorinput.setAttribute("name", "author")
//	              authorinput.setAttribute("type", "text")
//	              authorinput.classList.add('input')
//	              author.appendChild(authorSpan)
//	              author.appendChild(authorinput)
//	              edit.appendChild(author)
//	              const course = document.createElement('div')
//                 course.classList.add('course')
//                 const courseSpan = document.createElement('span')
//	             courseSpan.classList.add('bold')
//	             courseSpan.classList.add('edit-course')
//	             courseSpan.textContent = "Course:"
//	              const courseinput = document.createElement('input')
//	              courseinput.classList.add('edit-course-input')
//	              courseinput.setAttribute("name", "course")
//	              courseinput.setAttribute("type", "text")
//	              courseinput.classList.add('input')
//	              course.appendChild(courseSpan)
//	              course.appendChild(courseinput)
//	              edit.appendChild(course)
//	               const condition = document.createElement('div')
//                 condition.classList.add('condition')
//                 const conditionSpan = document.createElement('span')
//	             conditionSpan.classList.add('bold')
//	             conditionSpan.classList.add('edit-condition')
//	             conditionSpan.textContent = "Condition:"
//	              const conditioninput = document.createElement('input')
//	              conditioninput.classList.add('edit-condition-input')
//	              conditioninput.setAttribute("name", "condition")
//	              conditioninput.setAttribute("type", "text")
//	              conditioninput.classList.add('input')
//	              condition.appendChild(conditionSpan)
//	              condition.appendChild(conditioninput)
//	              edit.appendChild(condition)
//	              const image = document.createElement('div')
//                 image.classList.add('image')
//                 const imageSpan = document.createElement('span')
//	             imageSpan.classList.add('bold')
//	             imageSpan.classList.add('edit-image')
//	             imageSpan.textContent = "Image:"
//	              const imageinput = document.createElement('input')
//	              imageinput.classList.add('edit-image-input')
//	              imageinput.setAttribute("name", "image")
//	              imageinput.setAttribute("type", "text")
//	              imageinput.classList.add('input')
//	              image.appendChild(imageSpan)
//	              image.appendChild(imageinput)
//	              edit.appendChild(image)
//	              const description = document.createElement('div')
//                 description.classList.add('description')
//                 const descriptionSpan = document.createElement('span')
//	             descriptionSpan.classList.add('bold')
//	             descriptionSpan.classList.add('edit-description')
//	             descriptionSpan.textContent = "Description:"
//	              const descriptioninput = document.createElement('input')
//	              descriptioninput.classList.add('edit-description-input')
//	              descriptioninput.setAttribute("name", "description")
//	              descriptioninput.setAttribute("type", "text")
//	              descriptioninput.classList.add('input')
//	              description.appendChild(descriptionSpan)
//	              description.appendChild(descriptioninput)
//	              edit.appendChild(description)
//	              mainContainer.appendChild(edit)
//	               const price = document.createElement('div')
//                 price.classList.add('price')
//                 const priceSpan = document.createElement('span')
//	             priceSpan.classList.add('bold')
//	             priceSpan.classList.add('edit-price')
//	             priceSpan.textContent = "Price:"
//	              const priceinput = document.createElement('input')
//	              priceinput.classList.add('edit-price-input')
//	              priceinput.setAttribute("name", "price")
//	              priceinput.setAttribute("type", "text")
//	              priceinput.classList.add('input')
//	              price.appendChild(priceSpan)
//	              price.appendChild(priceinput)
//	              mainContainer.appendChild(price)
//	              const submitButton = document.createElement('button')
//	              submitButton.classList.add('submit-listing')
//	              submitButton.classList.add('listing-action')
//	              submitButton.classList.add('button')
//	              submitButton.textContent = "Submit"
//	              const addButton = document.createElement('button')
//	              addButton.classList.add('add-book')
//	              addButton.classList.add('listing-action')
//	              addButton.classList.add('button')
//	              addButton.textContent = "Add another book"
//	              const buttonClass = document.createElement('div')
//	              buttonClass.classList.add('buttons')
//	              buttonClass.appendChild(submitButton)
//	              buttonClass.appendChild(addButton)
//	              mainContainer.appendChild(buttonClass)
//
//	}
//}
