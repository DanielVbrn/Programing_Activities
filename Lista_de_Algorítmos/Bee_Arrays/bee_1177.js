import fs from "fs"
const input = fs.readFileSync('bee_1177_input.txt', 'utf-8')
const lines = input.split("\n")
let i = 0

// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

// import prompt from "prompt-sync"
// const input = prompt()

function main(){
    let T = Number(lines[i])
    i++
    let N = new Array(1000)
    let posicao = 0 
    while(posicao < 999){
        for(let contador = 0; contador < T ; contador++){
            if(posicao > 999){
                break
            }else{
                N[posicao] = contador
                posicao++
            }
        }
    }

    for(let c = 0 ; c < N.length ; c++){
        console.log(`N[${c}] = ${N[c]}`)
    }
  


}


main()