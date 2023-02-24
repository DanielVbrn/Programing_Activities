import {input} from "../../io_utils.js"

function main(){
    const salario_bruto = input("Insira um valor para o salário: ")
       

    if(salario_bruto>0 && salario_bruto<=900){
    console.log('Isento!')

    }else if(salario_bruto>900 && salario_bruto<=1500){
    const IR = salario_bruto*0.05
    const diminui1 = salario_bruto-IR
    
    console.log(`O salário líquido será: ${diminui1}`)

    }else if(salario_bruto>1500 && salario_bruto<=2500){
    const IR = salario_bruto*0.05
    const INSS = salario_bruto*0.10
    const s_impostos = INSS+IR
    const salario_liquido = salario_bruto - s_impostos
    console.log(`O salário líquido será: ${salario_liquido}`)
    }else{
    const IR = salario_bruto*0.05
    
    const INSS = salario_bruto*0.10
    
    const FGTS = salario_bruto*0.11
    
    const s_impostos = IR+INSS+FGTS
    const salario_liquido = salario_bruto - s_impostos
    console.log(`O salário líquido será: ${salario_liquido}`)
    }

    
}
main()