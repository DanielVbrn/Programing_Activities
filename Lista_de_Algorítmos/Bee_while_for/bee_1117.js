import {input} from "../io_utils.js"
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
function main(){
    
    let nota1  = Number(input("Insira uma nota: "))
    //let nota1 = Number(lines[i])
    
    //let nota2 = Number(lines[i])
    let i = 0
    while(nota1 < 0 || nota1 > 10){        
        console.log('nota invalida')
        i++
        nota1 = Number(input("Insira outra nota: "))  
        //nota1 = Number(lines[i])
        
    }
    i ++
    let nota2  = Number(input("Insira uma nota: "))
    while(nota2 < 0 || nota2 > 10){        
        console.log('nota invalida')
        i++
        nota2 = Number(input("Insira outra nota: "))  
        //nota2 = Number(lines[i])
        
    }
    
    const media = (nota1+nota2) / 2
    console.log(`media = ${media.toFixed(2)}`)
}

main()