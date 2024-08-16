

const likePost = () => {
    document.getElementById("btn-like").addEventListener("click", () => {
        const likeCount = document.getElementById("qtd-likes");
        let currentCount = parseInt(likeCount.textContent) || 0;
        likeCount.textContent = currentCount + 1;
    });

}

likePost()


const commentPost = () => {
    const commentButton = document.getElementById("btn-comment");
    commentButton.addEventListener("click", () => {
        const commentSection = document.getElementById("comment-section");

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = "new-comment";
        inputField.placeholder = "Escreva seu comentário...";

        const saveButton = document.createElement("button");
        saveButton.innerText = "Salvar Comentário";
        saveButton.id = "save-comment";

        commentSection.appendChild(inputField);
        commentSection.appendChild(saveButton);

        saveButton.addEventListener("click", () => {
            const commentText = inputField.value;
            if (commentText.trim() !== "") {
                addComment(commentText);
                inputField.remove(); 
                saveButton.remove();
            }
        });
    });
}

const addComment = (comment) => {
    const commentList = document.getElementById("comment-list");

    const newComment = document.createElement("p");
    newComment.textContent = comment;

    commentList.appendChild(newComment);
}

commentPost();


function calculateEngagement() {
    const interactions = document.getElementById("interactions").value;
    const views = document.getElementById("views").value;
    const errorMessage = document.getElementById("error-message");
    const resultDiv = document.getElementById("result");

    errorMessage.style.display = "none";
    resultDiv.textContent = "";

    if (interactions === "" || views === "") {
        errorMessage.textContent = "Por favor, preencha ambos os campos.";
        errorMessage.style.display = "block";
        return;
    }

    const interactionCount = parseFloat(interactions);
    const viewCount = parseFloat(views);

    if (isNaN(interactionCount) || isNaN(viewCount) || interactionCount < 0 || viewCount <= 0) {
        errorMessage.textContent = "Insira valores válidos para interações e visualizações.";
        errorMessage.style.display = "block";
        return;
    }

    const engagementRate = (interactionCount / viewCount) * 100;
    resultDiv.textContent = `A taxa de engajamento é ${engagementRate.toFixed(2)}%`;
}
