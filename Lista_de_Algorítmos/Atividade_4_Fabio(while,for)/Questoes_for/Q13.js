import prompt from "prompt-sync"
const input = prompt()
function main(){
    const N = Number(input("Insira um valor limite N: ")) 
    let num = 0
    let maior = Number(input(`Numero: `))
    
    for(let i = 0 ; i < N-1 ; i++){
        num = Number(input(`Numero: `))
        if(num > maior){
            maior = num
        }

        
    }

    console.log(maior)
    
}
main()