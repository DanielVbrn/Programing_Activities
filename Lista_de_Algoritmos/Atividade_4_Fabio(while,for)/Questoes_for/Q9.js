import prompt from "prompt-sync"
const input = prompt()
function main(){
    let num1 = Number(input("Insira um número de limite inferior: "))
    let num2 = Number(input("Insira um número de limite superior: "))
   
    for(let c = num1 ; c <= num2 ; c++){
        const N_pares = c % 2 
        if(N_pares === 0){
            console.log(`Os pares serão: ${c}`)
        }
       
    }




}
main()