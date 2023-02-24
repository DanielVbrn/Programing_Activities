import * as fs from "fs"
const input = fs.readFileSync("Q2_input.txt", "utf-8")
import prompt from "prompt-sync"
const valor = prompt()


function main(){
    const tam = Number(valor("Insira o tamanho do vetor: "))
    let A = new Array(tam)
    for(let c = 0 ; c < A.length ; c++){
        A = input.split("\n").map(Number)
        for(let i = 0 ; i < A.length ; i++){
            A = input.split("\n").map(Number)
            if(c !== i){
                if(A[c] === A[i]){
                    console.log(`Valor repetido: ${A[c]} na posição ${c}`)
                }
            }
        }
      
    }


}
main()