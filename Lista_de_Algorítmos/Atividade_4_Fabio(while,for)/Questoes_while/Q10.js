import prompt from "prompt-sync"
const input = prompt()
    function main(){
    let num1 = Number(input("Insira um número de limite inferior: "))
    let num2 = Number(input("Insira um número de limite superior: "))
    let c = num1
    while(c <= num2){
        const N_impares = c % 2 
        if(N_impares === 1){
            console.log(`Os ímpares serão: ${c}`)
        }  
        c++
    }




}
main()