import {input} from "../io_utils.js"
    function main(){
const num = Number(input('Adicione um número para ser lido: '))
const n_qualquer = Number(input('Adicione um valor qualquer que a divisão do primeiro número por ele seja ele mesmo ou 1: '))
if(num<0 || 100<num){
    console.log('recusado')
}
const div = num/n_qualquer

if(div===1 && div===num ){
    console.log('É primo')
}
if(div!==1 && div!==num){
    console.log('incorreto')
}



}main()

