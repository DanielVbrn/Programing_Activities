import * as fs from "fs"
const input = fs.readFileSync("Q1_input.txt", "utf-8")
import prompt from "prompt-sync"
const value = prompt()
let i = 0

function main(){
    const N = Number(value("Insira o tamanho do vetor: "))
    
    let vetor_A = new Array(N)
    for(let c = 0 ; c < vetor_A.length ; c++){
        vetor_A = input.split("\n").map(Number)
    }
    console.log(`Vetor inicial: ${vetor_A}`)
    
    let vetor_B = new Array(N)
    for(let c = vetor_B.length - 1 ; c >= 0 ; c--){
        vetor_B[i] = vetor_A[c]
        i++
    }
    console.log(`Vetor invertido: ${vetor_B}`)
 

}
main()