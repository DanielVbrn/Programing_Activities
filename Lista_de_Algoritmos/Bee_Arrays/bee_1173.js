import fs from "fs"
const input = fs.readFileSync("bee_1173_input.txt", "utf-8")
const lines = input.split("\n")

//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');

let i = 0

function main(){
    const N = new Array(10)
    let vetor = Number(lines[i])
    i++
    for(let contador = 0 ; contador < N.length ; contador++){
        N[contador] = vetor
        console.log(`N[${contador}] = ${vetor}`)
        vetor *= 2

    }


}

main()