import {input} from "../../io_utils.js"


function main(){
    let menu = "Olá"
    menu += "\n1 - Verifique a qual sexo pertence a pessoa."
    menu += "\n0 - Encerrar!"
    console.log(menu)
    let n = Number(input("Digite <1> para proseguir com a questão!"))

    while(n!==0){
        if(n == 1){
        const letra = input("Insira uma letra: ")
        if(letra == "F"){
        console.log('É do sexo feminino!')
        }else if(letra == "M"){
        console.log('É do sexo masculino!')
        }else{
        console.log('Sexo inválido!')

        }
    }
    
    }





}
main()