import prompt from "prompt-sync"
// import { eh_numero } from "./Eh_numero.js"
const input = prompt()


function main(){
    // const N = eh_numero()
    const N = Number(input("Insira o tamanho do vetor: "))
    let vetor = new Array(N)
    let ordem 

    for(let c = 0 ; c < vetor.length ; c++){
        vetor[c] = Number(input("Valor: "))
    }

    for(let c = 0 ; c < vetor.length ; c++){
        for(let i = c+1 ; i < vetor.length ; i++){
            if(vetor[c] > vetor[i]){
                ordem = vetor[c]
                vetor[c] = vetor[i]
                vetor[i] = ordem
            }
        }
    }
    for (let c = 0 ; c < vetor.length ; c++){
    }
    console.log(vetor)

}


main()