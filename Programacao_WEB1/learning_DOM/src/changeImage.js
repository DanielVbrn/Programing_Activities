let initialStateLight = true
const alterLight = () => {
    const btnRemoveLight = document.getElementById("illuminate")
    const image = document.getElementById("light");
    if(btnRemoveLight){        
        btnRemoveLight.addEventListener("click", () => {
            if(initialStateLight){
                image.src = "./assets/sol.png" 
            } else {
                image.src = "./assets/luzes.png"
            }
            initialStateLight = !initialStateLight;
        })
    }
}