import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N = Number(input("Insira um valor para N: "))

    let contador = N
    let fracao = 1

    while(contador > 0){
        fracao -= 1/contador

        contador++
    }
    console.log(fracao)




}
main()