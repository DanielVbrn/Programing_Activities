import {input} from "../../io_utils.js"

function main(){

const nota = input("Insira duas notas para um aluno: ").split(" ").map(Number)
const media = (nota[0]+nota[1])/2
console.log(`A média do aluno é: ${media}`)


if(9<media && media<10){
console.log('Aluno aprovado com nota A!')
}else if(7.5<media && media<=9){
    console.log( 'Aluno aprovado com nota B!')
}else if(6<media && media<7.5){
    console.log( 'Aluno aprovado com nota C!')
}else if(4<media && media<6){
    console.log('Aluno reprovado com ota D!')
}else if(0<media && media<4){
    console.log('Aluno reporvado com nota E')
}
}


main()