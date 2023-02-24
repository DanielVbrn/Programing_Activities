import {input} from "../../io_utils.js"

function main(){
    const N = Number(input("Insira um número para o pragrama para de rodar: "))
    let num = 1
    while(num <= N ){
        const par = num%2
        if(num > 0 && par === 0){  
          
        console.log(num)
        
        }
        num++
    }
    console.log(`O número pausará em : ${N}`)
   
}
main()