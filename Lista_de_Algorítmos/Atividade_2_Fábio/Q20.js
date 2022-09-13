import {input} from "../io_utils.js"

function main(){
const angulo = Number(input('Digite um valor para o ângulo: '))
if(0<angulo && angulo<=90){
    console.log('Se localiza no 1° quadrante')
}else if(90<angulo && angulo<=180){
    console.log('Se localiza no 2° quadrante')
}else if(180<angulo && angulo<=270){
    console.log('Se localiza no 3° quadrante')
}else if(270<angulo && angulo<=360){
    console.log('Se localiza no 4° quadrante')
}

}
main()