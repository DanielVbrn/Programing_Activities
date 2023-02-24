import {input} from "../io_utils.js"

function main(){
let n = Number(input("Digite um número de quatro dígitos: "))

while(1000<n && n<9999){
const raiz = Math.sqrt(n)
const rest = n % 100
const div = Math.trunc(n/100)
if(raiz==(rest+div)){
    console.log('É um quadrado perfeito')
}else if(raiz!=(rest+div)){
    console.log('Não é um quadrado perfeito')
}
}
}

main()