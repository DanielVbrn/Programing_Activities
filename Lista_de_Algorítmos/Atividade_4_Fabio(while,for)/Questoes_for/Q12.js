import prompt from "prompt-sync"
const input = prompt()
//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
function main(){
    let num = Number(input("Insira uma qauntidade X de números: "))
    
    let soma = 0
    let pedir_num= 0
    for(let contador = 0  ; contador < num ; contador ++){
        
        pedir_num =Number(input("Insira um número: "))
        soma += pedir_num 
        
    }

    console.log(`A media será: ${soma / num}`)
    console.log(`A soma será: ${soma}`)





}
main()