const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
    [modal, fade].forEach((element) => element.classList.toggle("hide"))
}


[openModal, closeModal, fade].forEach((elemento) => {
    elemento.addEventListener("click", () => toggleModal())
})