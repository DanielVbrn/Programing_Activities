import prompt from "prompt-sync"
const input = prompt()

function main(){
    let[X1, X2 , Y1, Y2] = input("Insira um valor para cada elemento").split(" ").map(Number)
    let soma = X1 + X2 + Y1 + Y2
    
    while(soma !== 0){
        [X1, X2 , Y1, Y2] = input("Insira um valor para cada elemento").split(" ").map(Number)

    }
    
    
    
    
}
main()