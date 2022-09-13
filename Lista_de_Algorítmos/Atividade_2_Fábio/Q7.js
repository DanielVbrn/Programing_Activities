import {input} from "../io_utils.js"

function main(){
const lado = input('Adicione 3 números para os lados do triângulo: ').split(' ').map(Number)
const l1 = lado[0]
const l2 = lado[1]
const l3 = lado[2]
let verification = verificacao_de_lados(l1,l2,l3)
        console.log(`${verification}: "É triângulo"`)

        if(E_equilatero(l1, l2, l3)){
            console.log("é equilátero")    
        } else if(E_isosceles(l1, l2, l3)) {
            console.log("é isósceles") 
        } else if (E_escaleno(l1, l2, l3)) {
            console.log("é escaleno")
        }

}
main()



function verificacao_de_lados(l1,l2,l3){
    return(l1>0 && l2>0 && l3>0)

}

function E_equilatero(l1,l2,l3){
    return(l1===l2 && l1===l3)
   
}

function E_isosceles(l1,l2,l3){
    return(l1===l2 &&  l1!=l3)
}


function E_escaleno(l1,l2,l3){
    return(l1!=l2 && l1!=l3 && l2!=l3)
    
}


