import {input} from "../io_utils.js"
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
function main(){
    let letra = input("Insira um número para cada letra m ou n: ").split(" ").map(Number)   
    let i = 0
    while(i < lines.length){
        //let letra = lines[i].split(' ').map(Number)
        let M = letra[0]
        let N = letra[1]

        let maior,menor
        let quit
        let soma
        if (!(M <= 0 || N <= 0)){
            quit = ""
            soma = 0 
            if (M > N){
                maior = M
                menor = N
            } else {
                maior = N
                menor = M
            }
            while(menor <= maior){
                soma += menor 
                quit = quit + `${menor} `
                menor++     
            }
            console.log(`${quit}Sum=${soma}`) 
            i++
        
        }
    }
}
main()