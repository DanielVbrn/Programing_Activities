import {input} from "../io_utils.js"
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');


function main(){

    let i = 1
    let M = Number(input(`Posição ${i}: `))
    let num
    let P_Maior  = 1

    while(i <= 100){  
        i++
        num = Number(input(`Posição ${i}:`))

        if(num > M){
            M = num
            P_Maior = i
        }
    }
    console.log(`O maior número é: ${M}`)
    console.log(`A posição do maior número é: ${P_Maior}`)

}main()
