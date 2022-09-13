import {input} from "../io_utils.js"

function main(){
    const nota = input("Insira duas notas de um aluno: ").split(" ").map(Number)
    const n1 = nota[0]
    const n2 = nota[1]

    const media = (n1+n2)/2
    if(7<=media){
        console.log('aprovado')
    }
    if(media<7){
        console.log('Precisa fazer a prova final!')
    }

    const N_rec = input('Insira a nota da prova final: ')
    const final = (N_rec+media)/2
    if(final<5){
        console.log('Aprovado')
    }
    if(final>5){
        console.log('Reprovado')
    }
}

main()