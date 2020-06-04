var form = document.querySelector('.form-with-validation')
var validateBtn = form.querySelector( '.validate-btn')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('clicked on validate')
})