import prompt from "prompt-sync"
const input = prompt()



function main(){
    let valor = new Array(3)
   
    let maior = 0
    let menor = 0
    for(let i = 0 ; i < valor.length ; i++){
        valor[i] = Number(input("Insira um valor: "))
        if(valor[i] > maior){
            maior = valor[i]
            
        }
        
        
    }
    console.log(valor)
    console.log(`O maior valor será: ${maior}`)
    console.log(`O menor valor será: ${menor}`)
    

}
main()