import {input} from "../../io_utils.js"

function main(){
const turno = input("Insira qual turno a pessoa estuda(M-matutino, V-vespertino, N-noturno)")
if(turno == "M"){
    console.log('Bom dia!')
}else if (turno == "V"){
    console.log('Boa tarde!')
}else if(turno == "N"){
    console.log('Boa noite!')
}else{
    console.log('Valor inválido!')

}




}
main()