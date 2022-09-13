import{input} from "../io_utils.js"
function main(){
    let seconds = Number(input('Adicione um valor'))
  
      
     let horas = 0
     while(seconds>=3600){
         horas += 1
         seconds-=3600
     }
     
     let minutos = 0
      while(seconds>=60){
          minutos +=1
          seconds-=60
      }
      console.log(`${horas}:${minutos}:${seconds}`)
  }
  main()