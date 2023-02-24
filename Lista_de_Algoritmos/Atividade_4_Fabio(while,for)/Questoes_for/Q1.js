import {input} from "../../io_utils.js"

function main(){
    const N = Number(input("Insira um número para o pragrama para de rodar: "))

    for(let num = 1 ; num <= N ; num++){
        if(num > 0){    
            console.log(num)
        
        }else{
            console.log("Incorreto!")
        }
    }
    console.log(`O número pausará em : ${N}`)                                                              





}
main()
