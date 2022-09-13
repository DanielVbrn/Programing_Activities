import {input} from "../io_utils.js"

function main(){
const num = input(" Insira dois valores: ").split(" ").map(Number)

const operacao = input('Insira uma das quatro operações(1-adição, 2-subtração, 3-multiplicação, 4-divisão) : ')
const v1 = num[0]
const v2 = num[1]

const a = v1+v2
const s = v1-v2
const m = v1*v2
const d = v1/v2
if(operacao==1 ){
    console.log(`A operação escolhida foi adição e o seu resultado é: ${a} `)
}else if(operacao==2){
    console.log(`A operação escolhida foi subtração e o seu resultado é: ${s} `)
}else if(operacao==3){
    console.log(`A operação escolhida foi multiplicação e o seu resultado é: ${m} `)
}else if(operacao==4){
    console.log(`A operação escolhida foi divisão e o seu resultado é: ${d} `)
}
}main()

