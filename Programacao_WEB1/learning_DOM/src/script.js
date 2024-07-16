const showText = () => {
    document.getElementById("btn-show-text").addEventListener("click", helloWorld())
    document.getElementsByTagName("button").item(0).addEventListener("click", showTextByTag())
}


const helloWorld = () => {
    alert("Hello World!")
}

const showTextByTag = () => {
    alert("Tag text!")
}

 
const countParagraphs = () => {
    document.getElementById("btn-count-paragraphs").addEventListener("click", () => {
        const div = document.getElementsByClassName("paragraphs")[0];
        const paragraphs = div.getElementsByTagName("p");

        const div2 = document.getElementsByClassName("result")[0];
        div2.textContent = `Quantity paragraphs: ${paragraphs.length}`
    })
}

const changeBackgroundColor = () => {
    const btnChangeBackgroundColor = document.getElementById("alter-background");
    btnChangeBackgroundColor.addEventListener("click", () => {
        const background = document.getElementById("content-style")
        background.style.background = "cyan"
        background.style.width = "10em"
        background.style.borderRadius = "10px"
    });
}


const copyContent = () => {
    let copy = document.getElementById("text")
    let newText = document.createElement("p")
    newText.id = "newCopy"

    newText.innerText = copy.innerText.toUpperCase()

    document.body.appendChild(newText)
}

document.addEventListener("DOMContentLoaded", () => {
    autoContrastButton();
});

