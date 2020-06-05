const form = document.querySelector('.form-with-validation');
const name = document.getElementById('name');
const growth = document.getElementById('growth')


form.addEventListener('click', function (event) {
    event.preventDefault()
    if (growth.value >= 250) {
    document.getElementById('giraffeMessage').classList.add("show")
    }
})