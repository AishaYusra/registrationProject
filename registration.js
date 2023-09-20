// document.addEventListener("DOMContentLoaded", function() {
//     const inputFields = document.querySelectorAll(".input") 
//     const icons = document.querySelectorAll(".icons i")
//     const errorMessages = document.querySelectorAll(".error-message")
//     const emailInput = document.querySelectorAll('input[type ="email"]')

//     const submitButton = document.getElementById("submitButton")
//     submitButton.addEventListener("click", function(event) {
//         inputFields.forEach((input, index) => {
//             if (!input)
//         })
//     })
// })


const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("submitButton")

console.log(button)

let url = "https://jsonplaceholder.typicode.com/posts"

const sendPost = async (data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })

    const json = await response.json()
    console.log(response)
    console.log(json)

    if (response.ok) {
        alert("Post Updated SSuccessfully")
    } else {
        alert("Post Failed")
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault()


    const name = {
        titles: `Post from ${lastname.value} `,
        bodys: `Hello ${firstname.value} ${lastname.value} we are grateful for having you sign up with you. Would you like to confirm that ${email.value} is your valid email?`,
        userId: Math.floor((Math.random() * 1000000))
    }

    firstname.value = ""
    lastname.value = ""
    email.value = ""
    password.value = ""

    sendPost(name)
    console.log(name)
    console.log(JSON.stringify(name))
})


