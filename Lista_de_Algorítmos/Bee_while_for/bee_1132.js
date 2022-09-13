// import prompt from "prompt-sync"
// const input = prompt()

// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

import fs from 'fs'
const input = fs.readFileSync('bee_1132_input.txt', 'utf-8')
const lines = input.split("\n") 
let contador = 0


function main(){
    // let contador = 0
    // const X = Number(input("Insira um valor de inicio: "))
    let X = Number(lines[contador])
    contador++
    
    // const Y = Number(input("Insira um valor de parada: "))
    let Y = Number(lines[contador])
    contador++
    
    let soma = 0
    let c 
    if (X > Y){
        c = Y
        while(c <= X){
            if (c % 13 !== 0){
            soma += c
        }
        c++

        }
    } else {
        c = X
        while(c <= Y){
            if (c % 13 !== 0){
                soma += c
                
            }
            c++
        }    
        
    }
    console.log(soma)
    // console.log(`A soma dos múltiplos de 13 é: ${soma}`)

}
main()