import {input} from "../../io_utils.js"

function main(){
const salario = Number(input("Insira um valor de salário qualquer: "))
if(0<salario && salario<=280){
    const percentual = salario*0.2 
    const aumento = salario+percentual
    console.log(`O salário antes do reajuste era : ${salario} \n O valor do aumento foi: ${percentual} \nDepois do reajuste passou a ser: ${aumento} com aumento de 20%`)
}else if(280<salario && salario<=700){
    const percentual = salario*0.15 
    const aumento = salario+percentual
    console.log(`O salário antes do reajuste era : ${salario} \n O valor do aumento foi: ${percentual} \nDepois do reajuste passou a ser: ${aumento} com aumento de 15%`)
}else if(700<salario && salario<=1500){
    const percentual = salario*0.1
    const aumento = salario+percentual
    console.log(`O salário antes do reajuste era : ${salario} \n O valor do aumento foi: ${percentual} \nDepois do reajuste passou a ser: ${aumento} com aumento de 10%`)
}else{
    const percentual = salario*0.05 
    const aumento = salario+percentual
    console.log(`O salário antes do reajuste era : ${salario} \n O valor do aumento foi: ${percentual} \nDepois do reajuste passou a ser: ${aumento} com aumento de 5%`)
}



}
main()