import prompt from "prompt-sync"
const input = prompt()

function main(){
    const valor = Number(input("Insira um valor: "))
    const taxa = Number(input("Insira a taxa de juros: "))
    const Verificar_pagamento = calcular_valores(valor, taxa)
    console.log(`O valor será de: ${Verificar_pagamento}`)
}


function calcular_valores(value, t){
    const valor = new Array(12)
    const valor_Taxa = value*(t/100)
    let valor_t = valor_Taxa + value

    let i = 0

    while(i < valor.length){
        valor[i] = valor_cobrado

        valor_t = valor_t + valor_t * valor_Taxa
        
        i++
    }
    return valor

}
main()