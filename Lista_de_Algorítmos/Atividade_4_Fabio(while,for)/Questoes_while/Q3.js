import {input} from "../../io_utils.js"

function main(){
let  A0 = Number(input("Valor de do primeiro termo: "))
let R = Number(input("Valor da razão: "))
let limite = Number(input("Insira qual será o limite: "))
let PA = " "
let c = 1 
while(c <= limite ) {
PA += "\n Número " + c + " : " + A0 
A0 += R
c++
}
console.log(PA)



}
main()