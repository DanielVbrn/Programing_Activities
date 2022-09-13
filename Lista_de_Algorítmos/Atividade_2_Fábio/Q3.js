import{ input } from "../io_utils.js"
function main(){
    const valores = input("Adicione 3 números para serem lidos: ").split(",").map(Number)
     //Use vírgula para separar os valores dos dois números que você irá adicionar!
    const A = valores[0]
    const B = valores[1]
    const C = valores[2]
    let maior_valor = verification_maior_valor(A,B,C)
    let menor_valor = verification_menor_valor(A,B,C)
    let valor_intermediario = verification_valor_intermediario(A,B,C)
    console.log(`o maior valor será: ${maior_valor}`)
    console.log(`o valor intermediário será: ${valor_intermediario}`)
    console.log(`o menor valor será: ${menor_valor}`)
    

}main()

function verification_maior_valor(A,B,C){
    let maior
    if(A>B && A>C){
        maior = A
    }
    if(B>C && B>A){
        maior = B
    }
    if(C>A && C>B){
        maior = C
    }
    return maior
}

function verification_menor_valor(A,B,C){
    let menor
    if(A<B && A<C){
        menor = A
    }else if(B<A && B<C){
        menor = B
    }
    if(C<A && C<B){
        menor = C
    }
    return menor
}

function verification_valor_intermediario(A,B,C){
    let intermediario
    if(A>B && A<C){
        intermediario = A
    }else if(B>A && B<C){
        intermediario = B
    }
    if(C>A && C<B){
        intermediario = C
    }
    return intermediario
}