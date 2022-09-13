import fs from "fs"
const input = fs.readFileSync("bee_1175_input.txt", "utf-8")
const lines = input.split("\n")
// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

let c = 0

function main(){
    let troca
    let vetor = new Array(20)

    for(let i = 0; i < vetor.length ; i++){
        vetor[i] = Number(lines[c])
        c++
   
    }

    for(let o = 0 ; o < (vetor.length / 2) ; o++){
        troca = vetor[o]
        vetor[o] = vetor[vetor.length -1 -o]
        vetor[vetor.length  -1 -o] = troca
    }

    for(let a = 0 ; a < vetor.length ; a++){
        console.log(`N[${a}] = ${vetor[a]}`)
    }




}
    



main()