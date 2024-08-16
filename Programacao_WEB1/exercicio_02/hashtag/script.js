

const addOption = () => {
    document.getElementById("addHashTag").addEventListener("click", () => {
        createHashTag()
    })
}



const createHashTag = () => {
    const create = document.createElement("option")
    const selectOption = document.getElementById("options")
    const textBox = document.getElementById("textBox")
    const result = document.getElementById("result")
    
    result.innerText = ""
    
    const hashtag = textBox.value.trim()

// QUESTÃO 08
    if (hashtag === "") {
        result.textContent = "Hashtag vazia!"
        return
    } 
    
    if (selectOption.children.length >= 5){
        result.textContent = "Número máximo de hashtags atingido!"
        return
    }

    if(hashtag.length < 2){
        result.textContent = "Texto precisa de no mínimo 2 caracteres!"
        return
    }
    
    create.textContent = textBox.value;
    create.value = textBox.value;
    
    selectOption.appendChild(create)
    textBox.value = "";
}


//QUESTÃO 09
const removeHashTag = () => {
    const element = document.getElementById("options");
    const selectedOption = element.options[element.selectedIndex];

    if (selectedOption) {
        element.removeChild(selectedOption); // Remove a opção selecionada
    }
}

const removeOption = () => {
    document.getElementById("removeHashTag").addEventListener("click", () => {
        removeHashTag();
    });
}