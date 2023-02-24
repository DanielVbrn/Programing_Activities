import {input} from "../../io_utils.js"


function main(){
const pergunta1 = input("Telefone para a vítima?  ")
const pergunta2 = input("Esteve no local do crime? ")
const pergunta3 = input("Mora perta da vitima a?  ")
const pergunta4 = input("Devia para a vítima?  ")
const pergunta5 = input("Ja trabalhou com a vítima? ")
const verification = sim_não(pergunta1,pergunta2,pergunta3,pergunta4,pergunta5)
console.log(verification)

function sim_não(pergunta1,pergunta2,pergunta3,pergunta4,pergunta5){


if(pergunta1 == "sim"){
    console.log('Inocente')
    if(pergunta2 == "sim"){
        console.log('Suspeito!')
        if(pergunta3 =="sim" || pergunta4 == "sim" || pergunta3 =="sim" && pergunta4 == "sim"){
            console.log('Cúmplice!')
            if(pergunta5 == "sim"){
                console.log("Assassino!")
            }
            
        }
    }
}






}




}

main()