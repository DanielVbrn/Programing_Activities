// import prompt from "prompt-sync"
// const input = prompt()

function main(){
    let vetor = [3, 5, -6, 4, 14]
    let variavel
    for(let i = 0 ; i < vetor.length ; i++){
        for(let c = i + 1 ; c < vetor.length ; c++){
            if(vetor[i] > vetor[c]){
                variavel = vetor[i]
                vetor[i] = vetor[c]
                vetor[c] = variavel
            }
        }
    }

    console.log(`Crescente: ${vetor}`)

    for(let i = 0 ; i < vetor.length ; i++){
        for(let c = i + 1 ; c < vetor.length ; c++){
            if(vetor[i] < vetor[c]){
                variavel = vetor[i]
                vetor[i] = vetor[c]
                vetor[c] = variavel
            }
        }
    }
    console.log(`Decrescente: ${vetor}`)

}
main()