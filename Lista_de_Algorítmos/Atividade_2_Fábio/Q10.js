import {input} from "../io_utils.js"
function main(){
const data = input('Adicione um valor para data: ').split(' ').map(Number)
const dia = data[0]
const mes = data[1]
const ano = data[2]
console.log(`${dia}/${mes}/${ano}`)

if(verification_ano(ano)){
    console.log('O ano está nos padrões')
}
if(verificacao_mes(mes)){
    console.log('o mês está nos padrões')
}
if(verificacao_dia(dia)){
    console.log('o dia está nos padrões')

}

}main()

function verification_ano(ano){
    return(0<ano && ano<100000)}

    

function verificacao_mes(mes){
    return(0<mes && mes<=12)}




function verificacao_dia(dia){
    return(0<dia && dia<30)}
