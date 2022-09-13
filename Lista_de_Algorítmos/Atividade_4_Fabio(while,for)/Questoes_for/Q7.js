import {input} from "../../io_utils.js"

function main(){
    const N = Number(input("Insira quantos números deseja somar: "))
    
    let soma = 0
    for(let num = 0 ; num <= N ; num++){      
      soma  = soma + num

      console.log(num)  
      
    }
    console.log(`A soma será: ${soma}`)
}
main()