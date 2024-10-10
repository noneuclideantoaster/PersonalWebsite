//Pseudocode:
//Create a "Hello World" message
//Add an alert that the page being viewed is under construction
//Link into the portfolio page
//Copy and paste the form JS into this document from Block12
//Link into the contact page

if (document.body.dataset.showAlert === "true") {
    alert("Hello World! This page is still under construction. Please check back later for more updates!")
}

//The above creates a pop up alert that combines the two strings into a message.

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

//The above ensures that the form on the contact page submits correctly

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})

//The above ensures that the portfolio popup doesn't appear on the form page