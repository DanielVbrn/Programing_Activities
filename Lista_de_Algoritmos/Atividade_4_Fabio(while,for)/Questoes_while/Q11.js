import prompt from "prompt-sync"
const input = prompt()
function main(){
    let num1 = Number(input("Insira um número de limite inferior: "));
    let num2 = Number(input("Insira um número de limite superior: "));  
    let divisor
    let count = num1 
    while(count <= num2 ){   
      divisor = 0
      let n = 1 
      while (n <= count ){
            if(count % n == 0){
              divisor++
            }
          n++
        }
        if(divisor == 2){
        console.log(count)
        }
        count++ 
    }
       

}


main()