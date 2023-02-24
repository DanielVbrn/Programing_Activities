import { input } from "../io_utils.js"

function main() {
    
  
    const verification = numbers_primes()
    console.log(verification)

}

function numbers_primes(){
    let [n1, n2] = Number(input("Numero: "))
    for(let c = 0 ; n1 % c !== 0 ; c++){
        valor = Number(input("Numero: "))
        if(n1 > n2){
            if(n1 % n2 === 0){
                return `${n1} e ${n2} são multiplos.` 
            }else{
                return false
            }

        }
        if(n1 < n2 === 0){
            if(n2 % n1 === 0 ){
                return `${n2} e ${n1} são multiplos.`
            } else {
                return false
            }
        } 
    }  
   


}
main()