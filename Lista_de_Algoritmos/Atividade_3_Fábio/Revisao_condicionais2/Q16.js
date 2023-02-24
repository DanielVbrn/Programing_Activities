import {input} from "../../io_utils.js"

function main(){
const T_carne = input("Insira qual tipo de carne deseja: \nF-Filé \nA-Alcatra \nP-Picanha \n>")
const qtd = Number(input("Insira a quantidade em Kg que deseja da carne selecionada: "))
const opcao = input("Deseja fazer a compra utilizando cartão tabajara? \n> ")
const P_file = qtd*4.90
const P_file2 =qtd*5.80
const P_Alcatra = qtd*5.90
const P_Alcatra2 =qtd*6.80
const P_Picanha = qtd*6.90
const P_Picanha2 =qtd*7.80
const desconto1 = P_file*0.95
const desconto2 = P_file2*0.95
const desconto3 = P_Alcatra*0.95
const desconto4 = P_Alcatra2*0.95
const desconto5 = P_Picanha*0.95
const desconto6 = P_Picanha2*0.95


if(opcao == "sim"){
if(T_carne == "F"){
if(0<qtd && qtd<=5){
    console.log(`Cupom fiscal: \nO tipo de carne é filé \nO preço a ser pago é: ${desconto1.toFixed(2)} reais`)
}else{
    console.log(`Cupom fiscal: \nO tipo de carne é filé \nO preço a ser pago é: ${desconto2.toFixed(2)} reais`)
}
}

if(T_carne == "A"){
    if(0<qtd && qtd<=5){
    console.log(`Cupom fiscal: \nO tipo de carne é Alcatra \nO preço a ser pago é: ${desconto3.toFixed(2)} reais`)

    }else{
        console.log(`Cupom fiscal: \nO tipo de carne é Alcatra \nO preço a ser pago é: ${desconto4.toFixed(2)} reais`)    
    }
}

if(T_carne == "P"){
    if(0<qtd && qtd<=5){
    console.log(`Cupom fiscal: \nO tipo de carne é Picanha \nO preço a ser pago é: ${desconto5.toFixed(2)} reais`)
    }else{
    console.log(`Cupom fiscal: \nO tipo de carne é Picanha \nO preço a ser pago é: ${desconto6.toFixed(2)} reais`)
       
    }
}    
}else if(opcao== "nao"){
    if(T_carne == "F"){
        if(0<qtd && qtd<=5){
            console.log(`Cupom fiscal: \nO tipo de carne é filé \nO preço a ser pago é: ${P_file.toFixed(2)} reais`)
        }else{
            console.log(`Cupom fiscal: \nO tipo de carne é filé \nO preço a ser pago é: ${P_file2.toFixed(2)} reais`)
        }
        }
        
        if(T_carne == "A"){
            if(0<qtd && qtd<=5){
            console.log(`Cupom fiscal: \nO tipo de carne é Alcatra \nO preço a ser pago é: ${P_Alcatra.toFixed(2)} reais`)
        
            }else{
                console.log(`Cupom fiscal: \nO tipo de carne é Alcatra \nO preço a ser pago é: ${P_Alcatra2.toFixed(2)} reais`)    
            }
        }
        
        if(T_carne == "P"){
            if(0<qtd && qtd<=5){
            console.log(`Cupom fiscal: \nO tipo de carne é Picanha \nO preço a ser pago é: ${P_Picanha.toFixed(2)} reais`)
            }else{
            console.log(`Cupom fiscal: \nO tipo de carne é Picanha \nO preço a ser pago é: ${P_Picanha2.toFixed(2)} reais`)
               
            }
        }   
}


}
main()