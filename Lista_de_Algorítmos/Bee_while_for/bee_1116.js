import {input} from "../io_utils.js"
//const input = require('fs').readFileSync('/dev/stdin', 'utf-8')
//var lines = input.split('\n');
function main(){
    let quant = Number(input("Quantidade: "))
    //let index = 0
    //let quant = Number(lines[index++])

    let X,Y
    let num
    let result

    for(let c = 0 ; c < quant ; c++){
        num = input("X,Y: ").split(" ").map(Number)
        //num = lines[index++].split(" ").map(Number)

        X = num[0]
        Y = num[1]
        if(Y === 0){
        console.log('divisao impossivel')
        
        }else{
        result = X / Y
        console.log(result.toFixed(1))
        }
    }

}
main()