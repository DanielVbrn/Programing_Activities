import prompt from "prompt-sync"
const input = prompt()
/*Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).*/

function main(){
    const N = Number(input("Quantidad de numeros: "))
    
    let razao = 1
    let termos = 0
    let R 
    for(let i = 0 ; i < N ; i++){
        R = termos + razao
        termos = R
        console.log(`Número ${i}: ${R}`)
        razao++
    }
   

    


}

main()