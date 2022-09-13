import {input} from "../../io_utils.js"

function main(){
    const num = Number(input("Insira um número para que seu fatorial seja calculado: "))
    let anterior = num 
    
    let n = 1
    while (n < num ){
        anterior *= n
        n++
    }
    console.log(anterior)
}
main()