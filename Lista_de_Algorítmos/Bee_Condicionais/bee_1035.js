//Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for
//maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever
//a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

import {input} from "../io_utils.js"
function main(){
const valores = input("Insira quatro valores inteiros: ").split(" ").map(Number)
const A = valores[0]
const B = valores[1]
const C = valores[2]
const D = valores[3]


const verification = valor(A,B,C,D)
console.log(verification)
}
main()


function valor(A,B,C,D){
    const soma1 = C + D
    const soma2 = A + B
    const par = A%2
if(B>C && D>A){
    if(soma1>soma2){
        if(C>0 && D>0){
            if(par==0){
                
            }
        }
    }
    return 'Valores aceitos'
}else{
    return 'Valores não aceitos'
}




}