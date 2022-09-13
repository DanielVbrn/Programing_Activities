import {input} from "../io_utils.js"

function main(){
    //A data dev conter o formato:dd/mm/aaaa
const data_Nascimento = input("Insira a data de nascimento da pessoa: ").split("/").map(Number)
const data_atual = input("Insira a data atual: ").split("/").map(Number)
const idade = verification(data_Nascimento,data_atual)
console.log(`A idade da pessoa será: ${idade} anos, ${idade[1]}meses e ${idade[0]} dias`)

function verification(data_Nascimento,data_atual){
    let resultado,resultado1,resultado2

if(data_Nascimento[0]>data_atual[0]){
   resultado =  data_Nascimento[0]-data_atual[0]
}else{
    resultado = data_atual[0]-data_Nascimento[0]
}
if(data_Nascimento[1]>data_atual[1]){
    resultado1 = data_Nascimento[1] - data_atual[1]
}else{
    resultado1 =  data_atual[1]-data_Nascimento[1]
}
if(data_Nascimento[2]>data_atual[2]){
    resultado2 =  data_Nascimento[2]-data_atual[2]
}else{
    resultado2 =  data_atual[2]-data_Nascimento[2]
}return (resultado,resultado1,resultado2)
}

}
main()