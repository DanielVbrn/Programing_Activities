import prompt from "prompt-sync"
const input = prompt()

function main(){
    let frase = input("Digite uma frase: ").split(" ")
    for(let c = 0; c < frase.length; c++){
        if(frase[c] ===  " "){
            console
        } else {
            console.log(frase[c])
        }
    }
    console.log(frase)
    
}
main()