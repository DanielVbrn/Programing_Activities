const changeImage = () => {
    const loadImage = document.getElementById("images")
    const result = document.getElementById('result');
    result.innerHTML = ""


    const imageUrl = loadImage.value;

    if(imageUrl) {
        const img = document.createElement("img")
        img.src = imageUrl
        result.appendChild(img)
    } else {
        resultadoDiv.textContent = "Nenhuma imagem selecionada.";
    }

    
}







