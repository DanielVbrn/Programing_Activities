import {input} from "../../io_utils.js"


function main(){
const KG_morango = Number(input("Insira a quantidade de morango que deseja em kg: "))
const Kg_maca = Number(input("Insira a quantidade de maçãs que deseja em kg: "))
const soma_KG = KG_morango+Kg_maca
const preco1 = KG_morango*2.50
const preco2 = KG_morango*2.20
const preco3 = Kg_maca*1.50
const preco4 = Kg_maca*1.80
const soma_P = preco1+preco2

if(0<KG_morango && KG_morango<=5){  
    console.log(`O valor a ser pago pelo morango é: ${preco1.toFixed(2)} reais`)
}else{    
    console.log(`O valor a ser pago pelo morango é: ${preco2.toFixed(2)} reais`)
}
if(0<Kg_maca && Kg_maca<=5){   
    console.log(`O valor a ser pago pela maçã é: ${preco3.toFixed(2)} reais`)
}else{
    console.log(`O valor a ser pago pela maçã é: ${preco4.toFixed(2)} reais`)
}


if(soma_KG>8 || soma_P>25){
    
    const desconto = soma_P*0.90
    console.log(`O valor total a ser pago é : ${desconto.toFixed(2)} reais`)
}

}
main()