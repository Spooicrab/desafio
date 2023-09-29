const socket = io()

const form = document.getElementById("form")
const titulo = document.getElementById("title")
const price = document.getElementById("price")

form.onsubmit = (e) => {
    e.preventDefault()
}