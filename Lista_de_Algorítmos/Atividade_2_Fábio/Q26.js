import {input} from "../io_utils.js"

function main(){
const lados = input("Insira os lados de um triângulo: ").split(" ").map(Number)
const l1 = lados[0]
const l2 = lados[1]
const l3 = lados[2]
if(l2<l1 && l3<l1){
    console.log('l1 é a hipotenusa')
}else{
    console.log('l1 é cateto')
}
if(l1<l2 && l3<l2){
    console.log('l2 é a hipotenusa')
}else{
    console.log('l2 é cateto')
}
if(l1<l3 && l2<l3){
    console.log('l3 é a hipotenusa')
}else{
    console.log('l3 é cateto')
}




}
main()