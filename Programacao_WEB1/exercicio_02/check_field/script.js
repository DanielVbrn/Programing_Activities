import showErrorMessage from "../message_erro/script";

document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', () => {
        exibirConteudo()
    });
});


function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    
    document.getElementById('conteudo').innerHTML = conteudo;

    const field = conteudo.innerHTML
    if(field.trim() === null) {
        showErrorMessage("conteudo", "Campo nulo!")
    }

    if(field.trim() === "") {
        showErrorMessage("conteudo", "Campo vazio!")
    }

}
