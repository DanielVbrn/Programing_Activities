
let initialState = true;
const autoContrastButton = () => {

    const alterContraste = document.getElementById("auto-contrast");
    const contrastImage = document.getElementById("contrast-image")

    if (alterContraste) {
        alterContraste.addEventListener("click", () => {
            if (initialState) {
                alterContraste.style.backgroundColor = "black";
                alterContraste.style.color = "white";
                contrastImage.src = "./assets/contraste.png";                
            } else {
                alterContraste.style.backgroundColor = "white";
                alterContraste.style.color = "black";
                contrastImage.src = "./assets/contraste2.png"

            }
            initialState = !initialState;

        });
    } else {
        console.error("Element with ID 'auto-contrast' not found.");
    }
};