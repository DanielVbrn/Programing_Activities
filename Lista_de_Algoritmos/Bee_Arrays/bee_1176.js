import fs from "fs"
const input = fs.readFileSync('bee_1176_input.txt', 'utf-8')
const lines = input.split("\n")
// import prompt from "prompt-sync"
// const input = prompt()

// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

let i = 0

function fibonacci(){
    let T
    let N
    let fib = new Array(61)
    
    fib[0] = 0
    fib[1] = 1

    
    for(let contador = 2 ; contador <= 60 ; contador++){
        fib[contador] = fib[contador - 1] + fib[contador - 2]
    }
        
    T = Number(lines[i])
    i++
    for(let c = 1 ; c <= T ; c++){
        N = Number(lines[i])
        i++
        
        console.log(`Fib(${N}) = ${fib[N]}`)  
    }

}



main()