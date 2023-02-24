import prompt from "prompt-sync"
const input = prompt()
function main(){
    let num1 = Number(input("Insira um número de limite inferior: "))
    let num2 = Number(input("Insira um número de limite superior: "))
    let N = Number(input("N : "))
     
    for(let c = num1 ; c <= num2 ; c++){
        const multi = c % N 
        if(multi === 0){
            console.log(`Os multiplos serão: ${c}`)
        }  
    }




}
main()