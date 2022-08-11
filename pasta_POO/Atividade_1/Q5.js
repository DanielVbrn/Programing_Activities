import prompt from "prompt-sync"
const input = prompt()

function main(){
    let inicio = Number(input("Insira o valor de início: "))
    let final = Number(input("Insira o valor de parada: "))
    for(let i = inicio ; i <= final ; i++){
        if(parseInt(i) === parseFloat(i)){
           console.log(i)
        }
    }


}
main()