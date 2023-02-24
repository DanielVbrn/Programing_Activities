import prompt from "prompt-sync"
const input = prompt()

function main(){
    let numerador = 1
    let denominador = 1
    let fracao = 0


    while(numerador <= 99 && denominador <= 50){
        fracao += numerador/denominador


        numerador+2
        denominador++
    }
    console.log(fracao)

}
main()