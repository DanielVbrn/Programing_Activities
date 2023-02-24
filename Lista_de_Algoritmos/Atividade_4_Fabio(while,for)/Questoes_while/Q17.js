import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N = Number(input("Insira até onde vai a contagem: "))
    let contador = 1
    let fracao = 0


    while(contador <= N ){
        fracao += 1/contador

        
        contador++   
    }
    console.log(`S = ${fracao.toFixed(2)}`)


}
main()