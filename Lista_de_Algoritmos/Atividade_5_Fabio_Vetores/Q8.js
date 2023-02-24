import prompt from "prompt-sync"
// import { elementos_do_vetor } from "./Math_random.js"
const input = prompt()

function main(){
    const N = Number(input("Insira o tamanho do vetor: "))
    let vetor = new Array(N)
    let maior = 0
    let menor = 0

    //const carregar_vetor =  elementos_do_vetor(vetor)
    for(let c = 0 ; c < vetor.length ; c++){
        vetor[c] = Number(input("Digite um valor: "))
    }
    console.log(vetor)
    
    for(let c = 0 ; c < vetor.length ; c++){
            if(vetor[c] > maior){
                maior = vetor[c] 
            }else{
                menor = vetor[c] 
            }
    }
    console.log(`Maior número do vetor: ${maior}`)
    console.log(`Menor número do vetor: ${menor}`)


}
main()