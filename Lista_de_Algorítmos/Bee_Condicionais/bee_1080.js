
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let num = 0  
    
    const n = input("Insira 100 números: ").split(" ").map(Number)
    for(let number of n){
        for(let p in number){
        if(num == posicao){
            const contador_max = Math.max(number[p])
        console.log(`O maior número será: ${contador_max}`)
        }
    }num++;
    }

}




main()