import{ input,print } from "../io_utils.js"
function main(){
   input('Adicione um número para cada letra: ')
  
    const I = Number(input('valor de I: '))
    const J = Number(input('valor de J: '))
    const K = Number(input('valor de K: '))
    let equal = ler_Numbers(I,J,K)
    print(`Os números iguais são: ${equal}`)
}
main()

function ler_Numbers(I,J,K){
  let igual = 0

  if(I==J){
    igual +=1
  }
  if(I==K){
    igual +=1
  }
  if(J==K){
    igual +=1
  }  
  return igual
}