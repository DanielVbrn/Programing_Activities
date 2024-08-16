

const checkField = () => {
    const checkEmail = document.getElementById('emailID')
    const checkPassword = document.getElementById("passwordID")
    if (checkEmail.value === "" || checkPassword.value === ""){
        showErrorMessage('mensagemErro', "Preencha todos os campos!")
    } else if (checkEmail.value !== "" && checkPassword.value !== "") {
        checkEmail.value = ''
        checkPassword.value = ''
    }

}

const showErrorMessage = (id, msg) => {
    const idError = document.getElementById(id)
    idError.innerText = msg
    idError.classList.remove('oculto')
    setTimeout(function() {
        idError.classList.add('oculto');
    }, 3000);
}


export default showErrorMessage;