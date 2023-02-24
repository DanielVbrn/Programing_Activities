//Entrada
//A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. 
//Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas 
//e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

//Saída
//Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação 
//ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.
import {input} from "../io_utils.js"
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
function main(){
    let i = 0
    const testes = Number(input("Insira quantos testes deseja: "))
    let quantidade 
    let tipo
    let Q_ratos = 0
    let Q_sapos = 0
    let Q_coelhos = 0
    let pedido
    while(i < testes){
        pedido =  input("Quantidade do tipo: ").split(" ")
        quantidade = Number(pedido[0])
        tipo = pedido[1]

        if(thats_a_mouse(tipo)){
            Q_ratos = Q_ratos+quantidade
        }else if(thats_a_frog(tipo)){
            Q_sapos = Q_sapos+quantidade
        }else{
            Q_coelhos = Q_coelhos+ quantidade
        }
        i++
    }
        const total =  Q_ratos + Q_sapos + Q_coelhos
        const percentual_R = (Q_ratos/total)*100
        const percentual_S = (Q_sapos/total)*100
        const percentual_C = (Q_coelhos/total)*100
        console.log(`Total de: ${total} cobaias`)
        console.log(`A quantidade de coelhos será ${Q_coelhos}`)
        console.log(`Percentual de coelhos será: ${percentual_C}`)
        console.log(`A quantidade de ratos será ${Q_ratos}`)
        console.log(`Percentual de ratos será: ${percentual_R}`)
        console.log(`A quantidade de sapos será ${Q_sapos}`)
        console.log(`Percentual de sapos será: ${percentual_S}`)
        
        

}



function thats_a_mouse(tipo){
    return tipo === "R"
}

function thats_a_frog(tipo){
    return tipo === "S"
}


main()