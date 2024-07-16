
const alterParagraph = () => {
    const botao = document.getElementById("botao");
    botao.addEventListener("click", () => {
        const paragraph = document.getElementById("paragraph");
        paragraph.textContent = "The text of this paragraph has been changed";
    })
} 

const clearContentParagraph = () => {
    const buttonClear = document.getElementById("clear-button");
    buttonClear.addEventListener("click", () => {
        const paragraph = document.getElementById("paragraph");
        paragraph.textContent = "";
    })
}
