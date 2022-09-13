import prompt from "prompt-sync"
const input = prompt()


/*Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/

function main(){
    let N = Number(input("Insira quantos números deseja: "))
    let n1 = 1
    let n2 = 0
    let soma
    let contador = 0
    while(contador < N){
        soma = n1
        n1 = n1 + n2
        n2 = soma
        console.log(n1)
        contador++

    }


}

main()