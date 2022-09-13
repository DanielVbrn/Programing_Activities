import prompt from "prompt-sync"
const input = prompt()
//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
function main(){
    let num = Number(input("Insira uma qauntidade X de números: "))
    let contador = 0 
    let soma = 0
    let pedir_num= 0
    while(contador < num){
        
        pedir_num =Number(input("Insira um número: "))
        soma += pedir_num 
        contador ++
    }

    console.log(`A media será: ${soma/num}`)
    console.log(`A soma será: ${soma}`)





}
main()