import prompt from "prompt-sync"
const input = prompt()

function main(){
    const N = Number(input("Tamanho do vetor: "))

    let A = new Array(N)
    let B = new Array(N)

    for(let i = 0 ; i < A.length ; i++){
        A[i] = Number(input("Valor para A: "))
    }    
    console.log(`Vetor A: ${A}`)
   
    
    for(let c = 0 ; c < A.length ; c++){
        for(let c = 0 ; c < B.length; c++){
            if (A[c] % 2 === 0){
                B[c] = 0
    
            } else if(A[c] % 2 === 1){
                B[c] = 1
            }
        }


    }
    console.log(`Vetor B: [${B}]`)
   
}


main()