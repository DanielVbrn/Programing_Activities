import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N  = Number(input("Insira o valor de parada: "))
    let i = 1
    let fracao = 0
    while(i <= N){
        if(numero_par(i)){
            fracao -= 1 / i
        }else{
            fracao += 1 / i
        }
        
        i++
    }
    console.log(`S = ${fracao.toFixed(2)}`)



}

function numero_par(i){
    if(i % 2 === 0){
        return true
    }

}
main()