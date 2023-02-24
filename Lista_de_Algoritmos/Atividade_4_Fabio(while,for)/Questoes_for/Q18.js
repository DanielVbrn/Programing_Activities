import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N = Number(input("Insira um valor limite para parar o programa: "))
    
    let contador2 = 1
    let soma = 1
    

    for(let contador1 = N ; contador1 > 0 && contador2 <= N ; contador1--){
        soma += contador2 / contador1

        
        console.log(`${contador2}/${contador1}`)
        
        contador2++
        
    }
    console.log(`S = ${soma}`)


}
main()