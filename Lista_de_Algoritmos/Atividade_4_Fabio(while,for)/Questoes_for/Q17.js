import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N = Number(input("Insira até onde vai a contagem: "))
    
    let fracao = 0


    for(let contador = 1 ; contador <= N ; contador++){
        fracao += 1/contador
   
    }
    console.log(`S = ${fracao.toFixed(2)}`)


}
main()