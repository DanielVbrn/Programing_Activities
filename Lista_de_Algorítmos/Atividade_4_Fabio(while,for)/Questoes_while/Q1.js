import {input} from "../../io_utils.js"

function main(){
const N = Number(input("Insira um número para o pragrama para de rodar: "))
let num = 1
while(num <= N ){
    if(num > 0){    
    console.log(num)
    
    }else{
        console.log("Incorreto!")
    }
    num++
}
console.log(`O número pausará em : ${N}`)





}
main()
