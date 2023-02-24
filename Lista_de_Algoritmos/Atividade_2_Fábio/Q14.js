import {input} from "../io_utils.js"

function main(){
const num = input("Insira 5 valores: ").split(" ").map(Number)
const n1 = num[0]
const n2 = num[1]
const n3 = num[2]
const n4 = num[3]
const n5 = num[4]
const media = (n1+n2+n3+n4+n5)/5
const resultado = maiores(n1,n2,n3,n4,n5)
console.log(`A média será: ${media}`)


}main()


function maiores(n1,n2,n3,n4,n5){
    const media = (n1+n2+n3+n4+n5)/5
    if(n1>media){
        console.log(`${n1} é maior que a média`)
    }
    if(n2>media){
        console.log(`${n2} é maior que a média`)
    }
    if(n3>media){
        console.log(`${n3} é maior que a média`)
    }
    if(n4>media){
        console.log(`${n4} é maior que a média`)
    }
    if(n5>media){
        console.log(`${n5} é maior que a média`)
    }


}

