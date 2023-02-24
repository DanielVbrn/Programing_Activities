import prompt from "prompt-sync"
const input = prompt()

function main(){
    let numerador = 1
    
    let fracao = 0


    for(let denominador = 1 ; numerador <= 99 && denominador <= 50 ; denominador++){
        fracao += numerador / denominador
        numerador+2
        
    }
    console.log(fracao)

}
main()