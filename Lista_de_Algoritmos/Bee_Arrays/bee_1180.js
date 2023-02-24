import fs from "fs"
const input = fs.readFileSync('bee_1180_input.txt', 'utf-8')
const lines = input.split("\n")
let i = 0

// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

function main(){
    let N  = Number(lines[i])
    i++

    let X = new Array(N)
    let menor = 0
    let posicao = 0

    for(let contador = 0 ; contador < N ; contador++){
        X = lines[i].split(" ").map(Number)
        
        if (contador === 0) {
            menor = X[contador]
            posicao = contador

        } else if (X[contador] < menor) {
            menor = X[contador]
            posicao = contador
        }
    }
    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${posicao}`)

}
main()