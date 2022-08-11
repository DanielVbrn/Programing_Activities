import prompt from "prompt-sync"
const input = prompt()


function main(){
    
    let num = [43, 5, 3, -5, -7, 4, -1]
    
    let soma = 0
    for(let i = 0 ; i < num.length-1 ; i++){
        soma += num[i] 
    }
    const media = soma/6
    let value = 0

    for(let i = 0 ; i < num.length-1 ; i++){
        value += (soma - num[i]) * (soma - num[i])
    }
    const desvio_padrao = value/6
    console.log(`Soma: ${soma}`)
    console.log(`Media: ${media}`)
    console.log(`Desvio padrão: ${Math.floor(Math.sqrt(desvio_padrao))}`)
}
main()