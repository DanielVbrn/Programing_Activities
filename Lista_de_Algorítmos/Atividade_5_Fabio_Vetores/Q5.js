// import * as fs from "fs"
// const input = fs.readFileSync("", 'utf-8')
import prompt from "prompt-sync"
const input = prompt()

function main(){
    let A = new Array(20)
    let soma
    for(let c = 0 ; c < A.length ; c++){
        A[c] = Number(input("Numero : "))
    }
    console.log(`Vetor A: ${A}`)

    for(let i = 0 ; i < A.length ; i++){
        for(let j = A.length - 1 ; j >= 0 ; j--){
            soma = (A[i] - A[j])**2
            soma += soma
        }
        
    }
    console.log(`S = ${soma}`)

}
main()

