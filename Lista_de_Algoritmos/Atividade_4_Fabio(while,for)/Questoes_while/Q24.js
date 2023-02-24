import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N_habitantes = Number(input("Insira a quantidade de habitantes: "))
    let contador = 0 
    let salario, N_filhos
    let c = 0
    let soma_salario = 0
    let soma_Qtd_filhos = 0
    
    while(contador < N_habitantes){

        salario = Number(input("Salário: "))
        soma_salario += salario

        N_filhos = Number(input("Número de filhos: "))
        soma_Qtd_filhos += N_filhos
        if(salario > 1000){
            c++
        }
        contador++

    }
    console.log(`Há ${c} com salários acima de mil reais.`)

    const media_salario= soma_salario / N_habitantes
    console.log(`A média salarial é: ${media_salario.toFixed(2)} R$.`)

    const media_filhos = Math.trunc(soma_Qtd_filhos / N_habitantes)
    console.log(`A média de filhos é ${media_filhos} por habitante.`)



}







main()