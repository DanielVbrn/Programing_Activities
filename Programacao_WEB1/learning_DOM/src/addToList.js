function addToListAndSelect() {
    const inputText = document.getElementById('inputText').value;
    
    if (inputText.trim() !== '') {
        const ul = document.getElementById('unorderedList');
        const li = document.createElement('li');
        li.textContent = inputText;
        ul.appendChild(li);
        
        const select = document.getElementById('dropdownMenu');
        const option = document.createElement('option');
        option.textContent = inputText;
        option.value = inputText;
        select.appendChild(option);
        
        document.getElementById('inputText').value = '';
    } else {
        alert('Por favor, digite algo.');
    }
}
