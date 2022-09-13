import fs from "fs"
const input = fs.readFileSync("bee_1172_input.txt", "utf-8")
const lines = input.split("\n")


//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
let i = 0

// import prompt from "prompt-sync"
// const input = prompt()

function main(){
    let X = new Array(10)
    let count = 0

    while(count < X.length) {
        // X[count] = Number(input("Número: "))
        X[count] = Number(lines[i])
        i++
        count++
    }
    verificacao_valores(X, count)
    

}

function verificacao_valores(vetor){
    for(let verificador = 0 ; verificador < vetor.length ; verificador++){
        if(vetor[verificador] <= 0){
            vetor[verificador] = 1
        }
        
        console.log(`X[${verificador}] = ${vetor[verificador]}`)
    }
    
}

main()