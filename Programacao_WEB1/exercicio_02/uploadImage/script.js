function carregarImagem() {
    const inputFile = document.getElementById("uploadImagem");
    const resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = "";
    
    const arquivoSelecionado = inputFile.files[0];

    if (arquivoSelecionado) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(arquivoSelecionado);
        resultadoDiv.appendChild(img);
    } else {
        resultadoDiv.textContent = "Nenhuma imagem selecionada.";
    }
}
