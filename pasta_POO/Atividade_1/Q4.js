import prompt from "prompt-sync"
const input = prompt()

function main(){
    let meses = Number(input("Insira a quantidade de meses: "))
    while(meses < 1 || meses > 12){
        meses = Number(input("Insira um valor menor ou igual a 12: "))

    }
    if(meses === 1){
        console.log(`Janeiro com 31 dias`)
        
    } else if(meses === 2){
        console.log(`Fevereiro com 28 dias`)
    } else if(meses === 3){
        console.log(`Março com 31 dias`)
    } else if(meses === 4){
        console.log(`Abril com 30 dias`)
    } else if(meses === 5){
        console.log(`Maio com 31 dias`)
    } else if(meses === 6){
        console.log(`Junho com 30 dias`)
    } else if(meses === 7){
        console.log(`Julho com 31 dias`)
    } else if(meses === 8){
        console.log(`Agosto com 30 dias`)
    } else if(meses === 9){
        console.log(`Setembro com 31 dias`)
    } else if(meses === 10){
        console.log(`Outubro com 30 dias`)
    } else if(meses === 11){
        console.log(`Novembro com 31 dias`)
    } else if(meses === 12){
        console.log(`Dezembro com 30 dias`)
    }
    


}
main()