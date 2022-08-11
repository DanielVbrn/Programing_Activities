// import * as fs from "fs"
// const input = fs.readFileSync("", 'utf-8')
import prompt from "prompt-sync"
const input = prompt()
let i = 0

function main(){
    const N = Number(input("Insira o tamanho do vetor: "))

    let A = new Array(N)
    let B = new Array(N)
    for(let c = 0 ; c < A.length ; c++){
        A[c] = Number(input(`Número : `))
        
    }
    console.log(`Conjunto A : ${A}`)
    
    for(let c = 0 ; c < B.length ; c++){
        B[c] = Number(input(`Número : `))
        
    }
    console.log(`Conjunto B : ${B}`)

    const C = new Array(2 * N)
    for(let c = 0 ; c < C.length ; c++){
        if(c < N){
            C[c] = A[c]
        }else {
            C[c] = B[i]
            i++
        }
    }
    console.log(`Conjunto união: ${C}`)

    let n
    for(let c = 0 ; c < A.length ; c++){
        for(let i = 0 ; i < B.length ; i++){
            if(c !== i){
                if(A[c] === B[i]){
                    console.log(`A intersecção entres os vetores A e B é: ${A[c]}`)
                }
            }
        }
      
    }

}



main()