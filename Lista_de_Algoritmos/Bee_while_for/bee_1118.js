//  import { input } from "../io_utils.js"
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
import fs from 'fs'
const input = fs.readFileSync('bee_1118_input.txt', 'utf-8')
const lines = input.split("\n")


function main() {
    let nota_A = verificacao_nota_A()
    let nota_B = verificacao_nota_B()  
    let media = media_das_notas(nota_A, nota_B)
    console.log(media)
    let opcao = notas()
    while(opcao !== 0){
        while(opcao === 1){
            nota_A = verificacao_nota_A()
            nota_B = verificacao_nota_B()  
            media = media_das_notas(nota_A,nota_B)
            console.log(media)
            opcao = notas()
        }
        if (opcao === 2){
            break
        }

    }
  
//let [nota_A, nota_B] = Number(lines[i++])

}

function verificacao_nota_A(nota_A){
   let i = 0
    // nota_A = Number(input("Insira uma nota: "))
    nota_A = Number(lines[i++])

    while(nota_A < 0 || nota_A > 10){
        console.log("nota invalida")
        // nota_A =  Number(input("Insira outra nota : "))
        nota_A =  Number(lines[i])
        
    }
    return nota_A
}

function verificacao_nota_B(nota_B){
   let a = 0
    // nota_B = Number(input("Insira uma nota: ")) 
    nota_B = Number(lines[a++])
   
    while(nota_B < 0 || nota_B > 10){
        console.log("nota invalida")
        // nota_B = Number(input("Insira outra nota: ")) 
        nota_B = Number(lines[a++]) 

    }
    return nota_B  
}


function media_das_notas(nota_A, nota_B, media){
    media = (nota_A + nota_B) / 2
    
    return media
}


function notas(opcao){
   let o = 0 
//   opcao = Number(input("novo calculo (1-sim 2-não ) "))
    while(opcao !== 1 && opcao !== 2){  
        // opcao = Number(input("novo calculo (1-sim 2-não ) "))  
      opcao = Number(lines[o++])
    
    }
    return opcao
}
main()

















