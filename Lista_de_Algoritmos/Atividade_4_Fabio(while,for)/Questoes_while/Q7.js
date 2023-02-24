import {input} from "../../io_utils.js"

function main(){
  const N = Number(input("Insira quantos números deseja somar: "))
  let num = 0
  let soma = 0
  while(num <= N ){      
    soma  = soma + num

    console.log(num)  
    num++
  }
  console.log(`A soma será: ${soma}`)

}
main()