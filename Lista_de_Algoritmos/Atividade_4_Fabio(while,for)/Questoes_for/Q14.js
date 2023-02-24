import prompt from "prompt-sync"
const input = prompt()
function main(){
    const N = Number(input("insira um valor: "))
    
    let quadrado 
    
    for(let num = 0 ; (num+1)**2 < N ; num++){
        
        quadrado = num**2
        
    }
    console.log(quadrado)


}
main()