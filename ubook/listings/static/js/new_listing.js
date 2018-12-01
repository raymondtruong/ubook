"use strict";
const slider = document.querySelector("#condition-slider1");
const sliderValue = document.querySelector("#slider-value1");

slider.oninput = function() {
    sliderValue.innerHTML = this.value / 2;
}

const mainContainer = document.querySelector("#main-container")
const addTextBookButton = document.querySelector("#add_textbook_button")
addTextBookButton.addEventListener('click', add_textbook)

let i = 2
function add_textbook(e){
	e.preventDefault()
	if (e.target.classList.contains("add-book")){
		 mainContainer.removeChild(mainContainer.getElementsByClassName("buttons")[0])
		 const edit = document.createElement('div')
                 edit.classList.add('edit')

                 const textbookStrongWrapper = document.createElement("strong")
                 const textbookUnderlineWrapper = document.createElement("u")

                 const textbook = document.createElement('span')
	             textbook.classList.add('bold')
	             textbook.classList.add('textbook')
	             textbook.textContent = "Textbook" + " " + i


	             textbookUnderlineWrapper.appendChild(textbook)
	            textbookStrongWrapper.appendChild(textbookUnderlineWrapper)

                 const spacer = document.createElement("hr")
                 edit.appendChild(spacer)
	             edit.appendChild(textbookStrongWrapper)
                 const title = document.createElement('div')
                 title.classList.add('title')
                 const titleSpan = document.createElement('span')
	             titleSpan.classList.add('bold')
	             titleSpan.classList.add('edit-title')
	             titleSpan.textContent = "Title: "
	              const titleinput = document.createElement('input')
	              titleinput.classList.add('edit-title-input')
	              titleinput.setAttribute("name", "title" + i)
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
	             authorSpan.textContent = "Author: "
	              const authorinput = document.createElement('input')
	              authorinput.classList.add('edit-author-input')
	              authorinput.setAttribute("name", "author"+i)
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
	             courseSpan.textContent = "Course: "
	              const courseinput = document.createElement('input')
	              courseinput.classList.add('edit-course-input')
	              courseinput.setAttribute("name", "course"+i)
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
	             conditionSpan.textContent = "Condition: "

	              const conditioninput = document.createElement('input')
	              conditioninput.setAttribute("name", "condition"+i)
	              conditioninput.setAttribute("id", "condition-slider"+i)
	              conditioninput.setAttribute("type", "range")
	              conditioninput.setAttribute("min", "0")
	              conditioninput.setAttribute("max", "20")
	              conditioninput.setAttribute("value", "0")

                  const conditionSliderValueWrapper = document.createElement('strong')
                  const conditionSliderValue = document.createElement('span')
	              conditionSliderValue.setAttribute("id", "slider-value"+i)
	              conditionSliderValue.innerHTML = 0
                  conditionSliderValueWrapper.appendChild(conditionSliderValue)


	              condition.appendChild(conditionSpan)
                  condition.appendChild(conditioninput)
                  condition.appendChild(conditionSliderValueWrapper)
	              edit.appendChild(condition)


	              const image = document.createElement('div')
                 image.classList.add('image')
                 const imageSpan = document.createElement('span')
	             imageSpan.classList.add('bold')
	             imageSpan.classList.add('edit-image')
	             imageSpan.textContent = "Image URL: "
	              const imageinput = document.createElement('input')
	              imageinput.classList.add('edit-image-input')
	              imageinput.setAttribute("name", "image"+i)
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
	             descriptionSpan.textContent = "Description: "
	              const descriptioninput = document.createElement('input')
	              descriptioninput.classList.add('edit-description-input')
	              descriptioninput.setAttribute("name", "description"+i)
	              descriptioninput.setAttribute("type", "text")
	              descriptioninput.classList.add('input')
	              description.appendChild(descriptionSpan)
	              description.appendChild(descriptioninput)
	              edit.appendChild(description)
	              mainContainer.appendChild(edit)

	              const submitButton = document.createElement('button')
	              submitButton.classList.add('submit-listing')
	              submitButton.classList.add('listing-action')
	              submitButton.classList.add('button')
	              submitButton.textContent = "Submit"



	              const addButton = document.createElement('button')
	              addButton.classList.add('add-book')
	              addButton.classList.add('listing-action')
	              addButton.classList.add('button')
	              addButton.textContent = "Add another book"
	              addButton.setAttribute("id", "add_textbook_button")
	              addButton.setAttribute("type", "button")
	              const buttonClass = document.createElement('div')
	              buttonClass.classList.add('buttons')
	              buttonClass.appendChild(submitButton)
	              buttonClass.appendChild(addButton)
	              mainContainer.appendChild(buttonClass)

                  const addTextBookButton = document.querySelector("#add_textbook_button")
                  addTextBookButton.addEventListener('click', add_textbook)

                  const slider = document.querySelector("#condition-slider"+i);
                  const sliderValue = document.querySelector("#slider-value"+i);

                  slider.oninput = function() {
                      sliderValue.innerHTML = this.value / 2;
                  }

                  i = i + 1



	}
}
