import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N_eleitores = Number(input("Número de eleitores: "))
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let voto_nulo = 0
    let voto_branco = 0

    let voto
    let contador = 0
    while(contador < N_eleitores){
        voto  = Number(input("Insira um número: "))
        if (voto === 1){
            c1++
        } else if (voto === 2){
            c2++
        } else if (voto === 3){
            c3++
        } else if (voto === 9){
            voto_nulo++

        } else if (voto === 0){
            voto_branco++
            
        }


        contador++
    }

   
    console.log(`O total de votos para o candidato 1 é: ${c1}.`)
    console.log(`O total de votos para o candidato 2 é: ${c2}.`)
    console.log(`O total de votos para o candidato 3 é: ${c3}.`)
    console.log(`O total de votos nulos é: ${voto_nulo}.`)
    console.log(`O total de votos em branco é: ${voto_branco}.`)


    if (c1 > c2 && c1 > c3){
            console.log(`O candidato 1 venceu a eleição.`)
        } else  if(c2 > c1 && c2 > c3){
            console.log(`O candidato 2 venceu a eleição.`)
        } else  if(c3 > c1 && c3 > c2){
            console.log(`O candidato 3 venceu a eleição.`)
        } 


}
main()