
/*
function buttonTeste () {
    
    document.getElementById("btn-teste").addEventListener("click", setColorButton())
}

function helloWorld() {
    alert("Hello wolrd!")
}

const setLinkButton = () => {
    window.location.href = "https://www.freecodecamp.org/portuguese/news/tutorial-sobre-button-onclick-em-html-e-evento-de-clique-em-javascript/"
}

*/
const setColorBackgraund = () => {
    let cor = document.getElementById("container")
    cor.style.backgroundColor = "black"
    cor.style.color ="white"
}

const resetInitialColor = () => {
    let cor = document.getElementById("container")
    cor.style.removeProperty
}

const copyContent = () => {
    let copy = document.getElementById("text")
    let newText = document.createElement("p")
    newText.id = "newCopy"

    newText.innerText = copy.innerText.toUpperCase()

    document.body.appendChild(newText)
    
}
