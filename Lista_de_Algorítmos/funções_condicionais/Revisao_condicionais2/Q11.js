import {input} from "../../io_utils.js"

function main(){
const num = Number(input("Insira um número: "))
const num_inteiro = num.toFixed(0)

if(num == num_inteiro){
    console.log('É inteiro!')
}else{
    console.log('É decimal!')
}




}main()