const increaseFontSize = () => {
    const font = document.getElementById("increase-font-size")
    font.addEventListener("click", () => {
        const size = document.body.style.fontSize = "300%"
    })
}

const decreaseFontSize = () => {
    const font = document.getElementById("decrease-font-size")
    font.addEventListener("click", () => {
        const size = document.body.style.fontSize = "100%"
    })
}

