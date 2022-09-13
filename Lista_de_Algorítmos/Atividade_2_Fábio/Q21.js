import {input} from "../io_utils.js"

function main(){
const numD = Number(input('Adicione um número com casa decimal para ser arreddonado: '))
const arredondar = Math.round(numD)
console.log(`O número após o arredondamento será: ${arredondar}`)


}
main()