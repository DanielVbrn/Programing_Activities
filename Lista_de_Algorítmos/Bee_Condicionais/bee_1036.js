//Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem
//correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

import { input } from "../io_utils.js"

function main(){
    const flut = input("Insira 3 valores: ").split(" ").map(Number)
    const a = flut[0]
    const b = flut[1]
    const c = flut[2]
    const formula_delta = (b**2) - (4*a*c) 

    const raiz1 = (-b+Math.sqrt(formula_delta))/(2*a)
    const raiz2 = (-b-Math.sqrt(formula_delta))/(2*a)
    

    if(a===0 || formula_delta<0){
    console.log('Impossível calcular')
    
    }else{
        console.log(`Raíz 1: ${raiz1.toFixed(5)}`)
        console.log(`Raíz 2: ${raiz2.toFixed(5)}`)
    }
}
main()




