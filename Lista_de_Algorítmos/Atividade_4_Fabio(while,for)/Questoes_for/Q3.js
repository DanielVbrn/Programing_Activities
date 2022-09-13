import {input} from "../../io_utils.js"

function main(){
    let A0 = Number(input("Valor do primeiro termo: "))
    let R = Number(input("Valor da razão: "))
    let limite = Number(input("Insira qual será o limite: "))
    let PA = " "

    for(let c = 1  ; c <= limite ; c++) {
        PA += "\n Número " + c + " : " + A0 
        A0 += R
    }
    console.log(PA)



}
main()