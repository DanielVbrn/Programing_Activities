import fs from "fs"
const input = fs.readFileSync('bee_1179_input.txt', 'utf-8')
const lines = input.split("\n")


// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

let i = 0

function main(){
    let N_par = new Array(5)
    let N_impar = new Array(5)
    let countPar = 0
    let countImpar = 0
    let N

    for(let contador = 0 ; contador < 15 ; contador++){
        N = Number(lines[i])
        i++
        if (N % 2 === 0) {
            N_par[countPar] = N
            countPar++
        } else {
            N_impar[countImpar] = N
            countImpar++

        }

        if (countPar === 5) {
            countPar = 0
            for(let o = 0 ; o < N_par.length ; o++){
                console.log(`par[${o}] = ${N_par[o]}`)
            }
        } else if (countImpar === 5) {
            for(let c = 0 ; c < N_impar.length ; c++){   
                console.log(`impar[${c}] = ${N_impar[c]}`)
                countImpar = 0
            }
        }

                
    }
    for(let contador1 = 0 ; contador1 < countImpar ; contador1++){
        console.log(`impar[${contador1}] = ${N_impar[contador1]}`)
    }
    for(let contador2 = 0 ; contador2 < countPar ; contador2++){
        console.log(`par[${contador2}] = ${N_par[contador2]}`)
    }

    


}
main()