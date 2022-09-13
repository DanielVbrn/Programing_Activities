import {input} from "../io_utils.js"

//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
function main(){ 
let i = 0 
let password = Number(Math.round(lines[i++]))
while(password !== 2002){
    console.log('Senha Invalida')
    password = Number(Math.round(lines[i++]))
}
console.log('Acesso permitido')

}
main()