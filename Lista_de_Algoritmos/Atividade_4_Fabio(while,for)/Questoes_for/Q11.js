import prompt from "prompt-sync"
const input = prompt()


function main(){
    let num1 = Number(input("Insira um número de limite inferior: "));
    let num2 = Number(input("Insira um número de limite superior: "));  
    let divisor
    
    for(let count = num1 ; count <= num2 ; count++ ){   
      divisor = 0
      
      for (let n = 1  ; n <= count ; n++){
        if(count % n === 0){
          divisor++
        }
          
      }
      if(divisor === 2){
        console.log(count)
      }
        
    }
}


main()