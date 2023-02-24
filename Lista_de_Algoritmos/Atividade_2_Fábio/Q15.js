import {input} from "../io_utils.js"

function main(){
const H1 = Number(input('Adicione um valor para a quantidade de horas aula do professorX: '))
const H2 = Number(input('Adicione um valor para a quantidade de horas aula do professorY: '))

const valor_H1 = Number(input('Adicione o valor em real da hora aula do professorX: '))
const valor_H2 = Number(input('Adicione o valor em real da hora aula do professorY: '))
const H_A_P1 = valor_H1*H1
const H_A_P2 = valor_H2*H2
if(H_A_P1>H_A_P2){
    console.log('O professorX tem o salário maior ')
}else if(H_A_P2>H_A_P1){
    console.log('O professorY tem o salário maior ')
   
}


}
main()
