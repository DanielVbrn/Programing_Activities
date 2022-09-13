import {input} from "../io_utils.js"
    function main(){
    const data =input('Adicione a data atual: ').split('/').map(Number)
    const D = data[0]
    const M = data[1]
    const A = data[2]
    input('Adicione a data de nascimento da pessoa: ').split('/').map(Number)
    const d = data[0]
    const m = data[1]
    const a = data[2]
    const dif1 = A-a
    const dif2 = M-m
    const dif3 = D-d
    if(idade){
        console.log(`a pessoa terá: ${dif1} anos, ${dif2} meses e ${dif3} dias `)
    }
}main()
function idade(){
    let dias = 0
    if(dias>=365){
        return +1 
    }
    if(dias>=30){
        return +1 
    }
    if(dias<=30 || dias<=365){
        return +1 
    }
}