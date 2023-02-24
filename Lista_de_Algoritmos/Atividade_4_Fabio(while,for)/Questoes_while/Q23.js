import prompt from "prompt-sync"
const input = prompt()

function main(){
    const n_dependentes = Number(input("Número de dependentes: ")) 

    let ficha, horas
    let i = 1
    while(i <= n_dependentes){
        ficha = Number(input("Ficha do funcionário: ")) 
        horas = Number(input("Horas de trabalho: ")) 
        valor_hora(horas, ficha)
        i++
    }
    const funcionario = n_dependentes * 40
    console.log(`E o valor pago pela quantidade de funcionários é: ${funcionario} R$`)

}


function valor_hora(horas, ficha){
    
    let valor = (horas * 12) 
    const desconto_INSS = valor * (8.5 / 100)
    const valor_recebido1 = valor * (91.5 / 100)

    const desconto_IR = valor_recebido1 * (5 / 100)
    const salario_liquido = valor_recebido1 * 0.95

    console.log(`O valor descontado para o INSS é: ${desconto_INSS.toFixed(2)} R$.`)
    console.log(`O valor descontado para o Imposto de Renda é: ${desconto_IR.toFixed(2)} R$.`)
    console.log(`O salário líquido do funcionário de ficha-${ficha} é: ${salario_liquido.toFixed(2)} R$.`)


}

main()            