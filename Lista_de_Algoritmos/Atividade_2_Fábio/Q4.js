import{input} from "../io_utils.js"

function main(){
    
    const numero_qualquer = input('Insira um número de dois dígitos: ').split("").map(Number)
    const unidade = numero_qualquer[0]
    const dezena = numero_qualquer[1]
    
    if(unidade==dezena){
        console.log('iguais')
    }else if(unidade!=dezena){
        console.log('diferentes')
    }

    
}
main()


 