// import * as fs from "fs"
// const input = fs.readFileSync("", 'utf-8')
import prompt from "prompt-sync"
const input = prompt()

function main(){
    let vetor = new Array(8)
    let binario = input("Insira um número com 8 elementos na base binário(1 ou 0):").split("").map(Number)
    while(binario.length !== vetor.length)  {
        binario = input("Por favor, inserir um número com 8 elementos na base binário(1 ou 0):").split("").map(Number)
    }
    
    for (let c = 0 ; c < binario.length ; c++){
        vetor[c] = binario[c]
    }
    console.log(binario)
    const verification_decimal = binario_pra_decimal(vetor)
    console.log(verification_decimal)
    const verification_hexadecimal = binario_para_hexadecimal(vetor) 
    console.log(verification_hexadecimal)
    // for (let c = 0 ; c < binario.length ; c++){
    //      verificar = binario_pra_decimal(binario[c])
    // }
    // console.log(verificar)


}

function binario_pra_decimal(vetor){
    let soma = 0
    let expoente = 7
    for(let i = 0; i < vetor.length ; i++){
        if(vetor[i] === 1){
            soma += 2**expoente
            
        }
        expoente--
    }
    return soma
}


function binario_para_hexadecimal(vetor){
    let soma = 0
    let expoente = 7
    for(let i = 0; i < vetor.length ; i++){
        if(vetor[i] === 1){
            soma += 2**expoente
            
        }
        expoente--
    }
    
    let resto = soma
    resto = soma % 16
    return resto
}


main()