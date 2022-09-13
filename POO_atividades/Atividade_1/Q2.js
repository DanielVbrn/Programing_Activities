import prompt from "prompt-sync"
const input = prompt()

function main(){
    let valor_bitcoin = Number(input("Insira um valor em real: "))
    while(valor_bitcoin === null){
        valor_bitcoin = Number(input("Insira um valor em real: "))
    }
    const conversao = valor_bitcoin/118835
    console.log(`O valor em reais será: ${conversao.toFixed(8)}`)


}
main()