// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');

import fs from 'fs'
const input = fs.readFileSync('bee_1131_input.txt', 'utf-8')
const lines = input.split("\n") 
let i = 0



function main(){
    let qtd_grenais = 0
    let opcao 
    let qtd_empate = 0
    let vitorias_gremio = 0
    let vitorias_inter = 0
    let c = 0
    let d = 0
    while(1){
        // let [qtd_gols_inter, qtd_gols_gremio] = input("Insira dois valores: ").split(" ").map(Number)
        let [qtd_gols_inter, qtd_gols_gremio] = lines[i++].split(" ").map(Number)
        if(qtd_gols_inter > qtd_gols_gremio){
            vitorias_inter++    
        }
        if(qtd_gols_inter < qtd_gols_gremio){
            vitorias_gremio++
            
        }
        if(qtd_gols_inter === qtd_gols_gremio){
            qtd_empate++
            
        } 
        c += qtd_gols_inter
        d += qtd_gols_gremio
         qtd_grenais++
        // opcao = Number(input("Novo grenal (1-sim 2-nao)"))
        console.log("Novo grenal (1-sim 2-nao)")
        opcao = Number(lines[i++])
        
        if(opcao === 1){
            continue

        }
        if(opcao === 2){
            break

        }
       
    }

    console.log(`${qtd_grenais} grenais`)
    console.log(`Inter:${vitorias_inter} `)
    console.log(`Gremio:${vitorias_gremio} `)
    console.log(`Empates:${qtd_empate} `)


    if(vitorias_inter > vitorias_gremio){
        console.log("Inter venceu mais")

    }else if(vitorias_inter < vitorias_gremio){
        console.log("Gremio venceu mais")

    }else{
        console.log("Nao houve vencedor")
    }
}
main()