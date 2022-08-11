import prompt from "prompt-sync"
// import { eh_numero } from "./Eh_numero.js"
const input = prompt()


function main(){
    const N = Number(input("Insira o valor de parada: ")) 
    let fib = new Array(N)
    fib[0] = 0
    fib[1] = 1

    for(let c = 2 ; c < fib.length ; c++){
        fib[c] = fib[c -1] + fib[c -2]
    }
    console.log(fib)
}
main()