import {input} from "../io_utils.js"

function main(){
const n = Number(input("Insira um número qualquer de 4 dígitos: "))
const leitura = verification(n)
console.log(`${leitura}`)


}
main()


function verification(n){
    const d1 = n%100
    const d2 = Math.trunc(n/100)
    const soma = d1 +d2
    if(n<1000 || n>9999){
        return 'recusado'
    }else{
        if(soma**2 == n){
            return'Obedece a característica!'
        }else{
            return'Não obedece!'
        }
    }
    
    }