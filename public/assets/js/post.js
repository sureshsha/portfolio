console.log('js file loaded')

const form = document.querySelector('#contact')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const message = document.querySelector("#message")

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    

    const formData = {
        Name : name.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value

    }

    fetch('/formData?data=' + formData).then((response) => {
        response.json().then((data) =>{
            console.log(data)
        })
    })
})