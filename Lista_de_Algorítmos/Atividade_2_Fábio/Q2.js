import{ input } from "../io_utils.js"
function main(){
    const valores = input("Adicione números a serem lidos: ").split(",").map(Number)
    //Use vírgula para separar os valores dos dois números que você irá adicionar!
    const X = valores[0]
    const Y = valores[1]
    let maior_valor = verification_maior_valor(X,Y)
    let menor_valor = verification_menor_valor(X,Y)
    console.log(`o maior valor será: ${maior_valor}`)
    console.log(`o menor valor será: ${menor_valor}`)
    

}main()

function verification_maior_valor(X,Y){
    let maior
    if(X>Y){
        maior = X
    }else if(Y>X){
       maior = Y
    }
    return maior

}

function verification_menor_valor(X,Y){
    let menor
    if(X<Y){
        menor = X
    }else if(Y<X){
       menor = Y
    }
    return menor

}