import {input} from "../../io_utils.js"

function main(){
const num = Number(input("Insira um número para ser lido: "))
if(num>1000){
    console.log('Negado!')
}else{
    if(num>100 && num<=1000){
        const div1 = Math.trunc(num/100)
        const rest = num%100
        const div2 = Math.trunc(rest/10)
        const rest2 = rest%10
        const div3 = Math.trunc(rest2/1)
        
        console.log(`O número possui ${div1} centenas, ${div2} dezenas e ${div3} unidades. `)
        

    }else if(num>0 && num<100){
        const div1 = Math.trunc(num/100)
        const rest = num%100
        const div2 = Math.trunc(rest/10)
        const rest2 = rest%10
        const div3 = Math.trunc(rest2/1)
        
        console.log(`O número possui ${div1} centenas, ${div2} dezenas e ${div3} unidades. `)
    }
    
}


}
main()