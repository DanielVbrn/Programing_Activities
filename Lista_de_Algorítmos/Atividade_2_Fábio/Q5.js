import {input} from "../io_utils.js"
function main(){
const N_qualquer = input("Adicione 3 números para serem lidos: ").split(" ").map(Number).sort(comp)
const X = N_qualquer[0]
const Y = N_qualquer[1]

const verification = comp(X,Y)
console.log(`A ordem será: ${verification}`)


}
main()
function comp(X,Y){
 return Y-X
}