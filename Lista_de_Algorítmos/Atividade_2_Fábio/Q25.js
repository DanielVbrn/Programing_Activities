import {input} from "../io_utils.js"

function main(){
const senha = input("Insira uma senha de quatro dígitos: ").split(" ").map(Number)
const n1 = senha[0]
const n2 = senha[1]
const n3 = senha[2]
const n4 = senha[3]
if(n1==1 && n2==2 && n3==3 && n4==4){
    console.log('Acesso concedido!')
}else{
    console.log('Acesso negado!')
}





}
main()