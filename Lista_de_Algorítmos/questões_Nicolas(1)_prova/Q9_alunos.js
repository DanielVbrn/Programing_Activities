import * as fs from "fs"
import prompt from "prompt-sync"
const input = prompt()


function main(){
    //CARREGAMENTO DO ARQUIVO

    const notas_por_aluno = carregar_arquivo().split("\n")
    console.log(notas_por_aluno.length)

    //ENTRADA

    let dados_por_aluno 
    let media_alunos = 0
    let media_classe = 0
    let N_aprovados = 0
    let N_reprovados = 0
    let provafinal = 0
    let reprovados_por_falta = 0

    //PROCESSAMENTO

    for(let contador of notas_por_aluno){
        dados_por_aluno = contador.split(";")
        
        let nome = dados_por_aluno[0]
        let nota_1 = Number(dados_por_aluno[1])
        let nota_2 = Number(dados_por_aluno[2])
        let nota_3 = Number(dados_por_aluno[3])
        let n_faltas = dados_por_aluno[4]

        n_faltas = n_faltas.split("\n").map(Number)
        n_faltas = n_faltas[0]
        let qtd = n_faltas[1]


        media_alunos  = calcular_media(nota_1,nota_2,nota_3)
        media_classe += media_alunos


        //SAÍDA

        console.log(`A média do aluno ${nome} será: ${media_alunos}`)

        if(alunos_reprovados_por_falta(n_faltas, qtd)){
            console.log("Aluno reprovado por falta")
            reprovados_por_falta++
        }else{
            if(alunos_aprovados(media_alunos)){
                console.log("Aluno aprovado!")
                N_aprovados++
            }else if(alunos_reprovados(media_alunos)){
                console.log('Aluno reprovado!')
                N_reprovados++
            }else{
                console.log("O aluno ficou de prova final.")
                provafinal++
            }
        }

        
    }
    const media_final = media_classe / dados_por_aluno.length
    console.log(`A media da turma é ${media_final.toFixed(2)}`)
    console.log(`Alunos reprovados por falta: ${reprovados_por_falta} `)
    console.log(`Alunos reprovados: ${N_reprovados} `)
    console.log(`Alunos aprovados: ${N_aprovados} `)
    console.log(`Alunos de prova final: ${provafinal}`)


}



function calcular_media(nota_1,nota_2,nota_3, media){
    media = ((nota_1 * 1) + (nota_2 * 2) + (nota_3 * 3)) / 6
    return media
}

function alunos_reprovados(media){
    if(media < 4){
       return media
    }

}

function alunos_aprovados(media){
    if(media >= 7){
        return media
    }
}

function alunos_reprovados_por_falta(falta, total){
    if(falta/total > 0.25 *total){
        return falta
    }

}


function carregar_arquivo(){
    try{
    const notas = fs.readFileSync('Q9_alunos_input.txt', 'utf-8')
    return notas

    } catch (error){
        console.error(error)
    }
}
main()