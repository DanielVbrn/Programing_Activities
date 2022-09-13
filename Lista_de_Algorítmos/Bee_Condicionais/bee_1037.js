//Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. 
//Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.


import { input } from "../io_utils.js"

function main(){
const num = Number(input("Insira um valor qualquer: "))
if(0<num && num<25){
    console.log('Encontra-se no intervalo [0,25]')
}else if(25<num && num<50){
    console.log('Encontra-se no intervalo [25,50]')
}else if(50<num && num<75){
    console.log('Encontra-se no intervalo [50,75]')
}else{
    console.log('Não encontra-se em nenhum dos intervalos')
}


}
main()