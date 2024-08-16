const moveToActiveInvestment = () => {
    moveActive();
    updateButtonStates();
}

const moveActive = () => {
    const active = document.getElementById("ativosDisponiveis");
    const card = document.getElementById("carteiraInvestimentos");
    const option = active.options[active.selectedIndex];
    const result = document.getElementById("result");
    
    result.innerText = "";
    
    if (active.selectedIndex === -1) {
        result.textContent = "Selecione pelo menos uma opção!";
    } else {
        active.removeChild(option);
        card.appendChild(option);
        result.innerText = ""; 
    }
}    

const moveToCard = () => {
    moveCardInvestment();
    updateButtonStates();
}

const moveCardInvestment = () => {
    const active = document.getElementById("ativosDisponiveis");
    const card = document.getElementById("carteiraInvestimentos");
    const option = card.options[card.selectedIndex];
    const result = document.getElementById("result");
    
    result.innerText = "";
    
    if (card.selectedIndex === -1) {
        result.textContent = "Selecione pelo menos uma opção!";
    } else {
        card.removeChild(option);
        active.appendChild(option);
        result.innerText = "";
    }
}

const updateButtonStates = () => {
    const active = document.getElementById("ativosDisponiveis");
    const card = document.getElementById("carteiraInvestimentos");
    const moveToRightBtn = document.getElementById("moverParaDireitaBtn");
    const moveToLeftBtn = document.getElementById("moverParaEsquerdaBtn");

    moveToRightBtn.disabled = active.options.length === 0;
    moveToLeftBtn.disabled = card.options.length === 0;
}

window.onload = () => {
    updateButtonStates();
}
