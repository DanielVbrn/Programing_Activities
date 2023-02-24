import prompt from "prompt-sync"
const input = prompt()
function main(){
let  A0 = Number(input("Valor de do primeiro termo: "))
const Razao = Number(input("Valor da razão: "))
const limite = Number(input("Insira qual será o limite: "))
let c = 0
while(c < limite ) {
    A0 = A0 * Razao 
    console.log(" \n Número "  + (c + 1) + ": " + A0)
    c++
}

}main()