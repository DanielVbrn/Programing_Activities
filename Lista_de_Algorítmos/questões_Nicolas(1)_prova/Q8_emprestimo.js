import { input } from "../io_utils.js"

function main() {
    const renda_mensal = Number(input("Insira um valor para a sua renda mensal: "))
    const emprestimo = Number(input("Insira o valor do empréstimo que deseja fazer: "))
    const prazo = Number(input("Digite o prazo: "))

    while(validacao_parcelas(prazo)){
        if(verificacao_valor_minimo(emprestimo)){
            const verification_IOF = calculo_IOF(emprestimo, prazo)
            const verification_valor_juros= calculo_do_juros(emprestimo, prazo)
            const total_a_pagar = emprestimo + verification_IOF + verification_valor_juros
            const valor_das_parcelas = valor_parcelas(total_a_pagar, prazo)
            console.log(`Valor do IOF: ${verification_IOF.toFixed(2)}`)
            console.log(`valor do juros: ${verification_valor_juros.toFixed(2)}`)
            console.log(`Total a ser pago pelo cliente: ${total_a_pagar.toFixed(2)}`)
            console.log(`Valor de cada parcela: ${valor_das_parcelas.toFixed(2)}`)
            if(verification_valor_dentro_da_faixa(valor_das_parcelas, renda_mensal)){
                console.log('O EMPRÉSTIMO FOI APROVADO!')
            }else{
                console.log('O EMPRÉSTIMO FOI NEGADO!')
            }


        }
    break
    }

}



function calculo_do_juros(prazo, valor){
    const taxa_SELIC = 12.75/100
    if(prazo <= 6){
        return 0.5 * valor * taxa_SELIC
    }else if(prazo <= 12){
        return 0.75 * valor * taxa_SELIC
    }else if(prazo <= 18){
        return taxa_SELIC * valor
    }else{
        return 1.3 * taxa_SELIC * valor
    }
}


function calculo_IOF(valor, prazo){
   return ((valor * 0.38) / 100) + ((valor * 0.0082 * prazo * 30) / 100)


}

function validacao_parcelas(prazo){
    if(2 <= prazo && prazo <= 24){
        return true
    }else{
        return false
    }
}

function verificacao_valor_minimo(valor){
    if(valor >= 1212){
        return valor
    }
}

function valor_parcelas(total_a_pagar, prazo){
    return (total_a_pagar / prazo)

}

function verification_valor_dentro_da_faixa(renda_mensal, valor_das_parcelas){
    if(valor_das_parcelas <= (renda_mensal*0.4)){
        return valor_das_parcelas
    }

}


main()