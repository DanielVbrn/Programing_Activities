import {input} from "../../io_utils.js"

function main(){
const G_A = input("Insira uma letra para codificar qual tipo de combustível deseja: \nG-Gasolina \nA-Alcool \n> ")
if(G_A ==="A"){
    const l_alcool = Number(input("Insira quantos litros de álcool deseja: ")) 
    
    if(l_alcool>0 && l_alcool<=20){
        const preco = 1.90*0.97
        const desconto = preco * l_alcool
        console.log(`O preço do abastecmento será: ${desconto}`)
    }else {
        const preco = 1.90*0.95
        const desconto = preco * l_alcool
        console.log(`O preço do abastecmento será: ${desconto}`)
    } 
}else if(G_A ==="G"){
    const l_gasolina = Number(input("Insira quantos litros de gasolina deseja: ")) 
    
    if(l_gasolina>0 && l_gasolina<=20){
        const preco = 1.90*0.96
        const desconto = preco * l_gasolina
        console.log(`O preço do abastecmento será: ${desconto.toFixed(2)} reais.`)
    }else {
        const preco = 1.90*0.94
        const desconto = preco * l_gasolina
        console.log(`O preço do abastecmento será: ${desconto.toFixed(2)} reais.`)
    } 
}


}
main()