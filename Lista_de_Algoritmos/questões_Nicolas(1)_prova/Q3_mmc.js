import { input } from "../io_utils.js"

function main() {
    let A = Number(input("Insira um valor para A: "))
    while(A < 0){
        A = Number(input("Insira um valor inteiro para A: "))    
    }

    let B = Number(input("Insira um valor para B: "))
    while(B < 0){
         B = Number(input("Insira um valor inteiro para B: "))
    }
    const mmc = verification_mmc(A,B)
    console.log(mmc)
}


function verification_mmc(A, B){
    let c_comum = 1
    while(c_comum % A !== 0 || c_comum % B !== 0){
        c_comum++
    }    
    return c_comum
}


main()