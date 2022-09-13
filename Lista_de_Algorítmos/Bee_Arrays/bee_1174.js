import fs from "fs"
const input = fs.readFileSync("bee_1174_input.txt", "utf-8")
const lines = input.split("\n")


//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');

let i = 0

function main(){
    const A = new Array(100)
    let vetor 

    for(let count = 0 ; count < A.length ; count++){
        A[count] = vetor
        vetor = Number(lines[i])
        
        if(vetor <= 10){
            console.log(`A[${count}] = ${vetor}`)
        }
        i++

    }

}
main()