import {input} from "../../io_utils.js"


function main(){
const nota = input("Insira duas notas de um aluno: ").split(" ").map(Number)
const media = (nota[0] + nota[1]) / 2
if(media >= 7){
    console.log("Aprovado!")
}else if(media < 7){
    console.log("Reprovado!")
}else if(media == 10){
    console.log("Aprovado com distinção!")
}




}
main()