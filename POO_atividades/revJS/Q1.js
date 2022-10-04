import prompt from "prompt-sync"
const input = prompt()

function main(){
    const num = Number(input("Insira um número ponto flutuante: "))
    console.log(Math.floor(num))
    console.log(Math.ceil(num))

}
main()