import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N = Number(input("Insira um valor limite para parar o programa: "))
    let contador2 = 1
    let contador = N
    let soma1 = 1
    let soma2 = 1
    

    while(contador > 0 && contador2 <= N){
        soma1 *= contador
        soma2 = (soma1/contador) * contador2

        
        console.log(`${contador2}/${contador}`)
        
        contador2++
        contador--
    }
    console.log(`S = ${soma2}/${soma1}`)


}
main()