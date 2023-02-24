import prompt from "prompt-sync"
const tamanho = prompt()

export function elementos_do_vetor(){
    let inicio = Number(tamanho("Insira o valor de inicio: "))
    let fim = Number(tamanho("Insira o valor de parada: "))
    let vetor_Aleatorio = new Array()

    for(let c = inicio; c < fim; c++){
       vetor_Aleatorio[c] = Math.floor(Math.random()*10)
    }
    console.log(vetor_Aleatorio)

    


}elementos_do_vetor()

// const multi_num = (num) => {return num * 2}