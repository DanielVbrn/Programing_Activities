import {input} from "../io_utils.js"

function main(){  
    const numbers = input("Insira um valor para cada letra(A,B,C): ").split(" ").map(Number)
    const A = numbers[0]
    const B = numbers[1]
    const C = numbers[2]
    if(A===0){
    return false
    }
    
    const equacao = (B**2)-4*A*C
    if(equacao<0){
        console.log('Não existe raízes reais')
    }
    
    const raiz1 = (B*-1+Math.sqrt(equacao))/(2*A)
    const raiz2 = (B*-1-Math.sqrt(equacao))/(2*A)
    console.log(equacao)
    console.log(`Os valores para as raízes são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`)

}
main()