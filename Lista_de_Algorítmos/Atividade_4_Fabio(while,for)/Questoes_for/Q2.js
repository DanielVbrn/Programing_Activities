import {input} from "../../io_utils.js"

function main(){
    const N = Number(input("Insira um número para o pragrama para de rodar: "))
   
    for( let num = 1 ; num <= N ; num++){
        const par = num%2
        if(num > 0 && par === 0){  
          
        console.log(num)
        
        }
    }
    console.log(`O número pausará em : ${N}`)
   
}
main()