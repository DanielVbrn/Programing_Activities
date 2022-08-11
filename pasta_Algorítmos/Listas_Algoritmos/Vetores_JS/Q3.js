// import * as fs from "fs"
// const input = fs.readFileSync("Q3_input.txt", 'utf-8')
import prompt from "prompt-sync"
const value = prompt()/*---> Para o usuário digitar*/
let i = 0


function main(){
    const tamanho = Number(value("Insira o tamanho dos vetores:"))
    let A = new Array(tamanho)
    let B = new Array(tamanho)
    let contador = 0

    for(let i = 0 ; i < A.length ; i++){
        
        A[i] = Number(value("Número: "))
        // A[i] = input.split("\n").map(Number)
    }
    
    for(let i = 0 ; i < B.length ; i++){

        B[i] = Number(value("Número: "))
        // B[i] = input.split("\n").map(Number)
    }
    const C = new Array(2 * tamanho)
    while(i < C.length ){

        if(i < tamanho){
            C[i] = A[i]
        }else{
            C[i] = B[contador]
            contador++
        }
        i++
    }
    console.log(C)



}
main()