import fs from "fs"
const input = fs.readFileSync('questao_sort.txt', 'utf-8')
const lines = input.split("\n")

// const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
// var lines = input.split('\n');


function main(){
    const value = lines[0].split(" ").map(Number)
    let A = value[0]
    let B = value[1]
    let C = value[2]


    if (A < B && A < C){
        console.log(A)
        if (B < C) {
            console.log(B)
            console.log(C) 
        } else {
            console.log(C) 
            console.log(B) 
        }
    } else if (B < C) {
        console.log(B) 
        if (A < C) {
            console.log(A)
            console.log(C)
        } else {
            console.log(C)
            console.log(A)
        }

    } else {
        console.log(C)
        if (A < B) {
            console.log(A)
            console.log(B)
            
        } else {
            console.log(B)
            console.log(A)

        }
    }

    console.log("")
    console.log(A)
    console.log(B)
    console.log(C)

}
main()