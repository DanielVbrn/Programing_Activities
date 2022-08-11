import prompt from "prompt-sync"
const input = prompt()

export function elementos_do_vetor(){
    let vetor_Aleatorio = new Array(10)
    for(let c = 0; c < vetor_Aleatorio.length; c++){
        vetor_Aleatorio[c] = Math.floor(Math.random()*100)
    }
    console.log(vetor_Aleatorio) 




}
