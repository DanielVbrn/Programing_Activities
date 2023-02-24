import prompt from "prompt-sync"
const input = prompt()
function main(){
    const N = Number(input("Insira um valor limite N: ")) 
    let num = 0
    let maior = Number(input(`Numero: `))
    let i = 0
    while(i < N-1){
        num = Number(input(`Numero ${i}: `))
        if(num > maior){
            maior = num
        }

        i++
    }

    console.log(maior)
    
}
main()