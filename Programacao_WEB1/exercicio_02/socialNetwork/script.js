

const buttonSubmit = () => {
    const btn = document.getElementById("enviarBtn").addEventListener("click", () => {
        favoriteNetWorkSocial()
    })

}

const favoriteNetWorkSocial = () => {
    const favorites = document.getElementsByName("redesSociais")
    const result = document.getElementById("redesSelecionadas")

    result.innerHTML = ""
    
    let selected = false;

    favorites.forEach(favorite => {
        if(favorite.checked) {
            selected = true;
            result.innerHTML += `${favorite.value} <br>`;
        }
    })

    if(!selected) {
        result.innerHTML = "Nenhuma rede social foi selecionada!"
    }
    
}