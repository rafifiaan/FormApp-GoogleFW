const scriptURL = 'https://script.google.com/macros/s/AKfycbxFn-9Dw7u02mQfZh53mQA14OzodYTQh8ESW8TYfyesdQjvpMNi5SEyrFHpdiCeU1Cy/exec'

const form = document.forms['regist-form']
// const submitButton = form.querySelector('button[type="submit"]')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Terima kasih udah daftar, tunggu kabar lewat email ya!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})