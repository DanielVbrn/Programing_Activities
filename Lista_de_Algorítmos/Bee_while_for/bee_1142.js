// import prompt from "prompt-sync"
// const input = prompt()

import fs from 'fs'
const input = fs.readFileSync('bee_1142_input.txt', 'utf-8')
const lines = input.split("\n")

function main(){
    let N = numero_inteiro()
    
    let contador = 1
    let contador2 = 1

    while(contador2 <= N){
      
        console.log(`${contador} ${contador+1} ${contador + 2} PUM`)
        contador += 4
        contador2++
    }




}


function numero_inteiro(numero){
    let i = 0
    // numero = Number(input("Insira um valor inteiro: "))
    numero = Number(lines[i])

    while(numero < 0){
        // numero = Number(input("Insira outro valor inteiro: "))
        numero = Number(lines[i])
        i++

    }

    return numero
}
main()