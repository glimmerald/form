const form = document.querySelector('.form-with-validation');
const name = document.getElementById('name');


form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (name.value === '') {
    document.getElementById('name-message').classList.add("show")
    }
})