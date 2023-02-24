import {input} from "../io_utils.js"

function main(){
const altura = Number(input('Insira um valor para a altura da pessoa em metros: '))
const peso = Number(input('Insira um valor para o peso da pessoa em kilogramas: '))
const IMC = peso/(altura**2)
if(IMC<25){
    console.log('Está com o peso normal')
}else if(25<=IMC<=30){
    console.log('Considerado obeso')
}else if(IMC>30){
    console.log('Obesidade mórbida')
}


}
main()