//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');
import {input} from "../io_utils.js"

 function main(){
    //entrada: adicione um valor qualquer para que seja incidido sobre ele o imposto de renda
    const salario = Number(input('Insira o valor para salário: '))
    let valor = 0
    //processamento
    if(salario>4500.00){
       valor = (1000.00*0.08)+(1500.00*0.18)+((salario-4500.00)*0.28)
       console.log(`:R$ ${valor} `)

    }
    
    else if(3000<salario && salario<=4500.00){
        valor = (1000.00*0.08)+((salario-3000.00)*0.18)
        console.log(`:R$ ${valor} `)
    }
    
    else if(2000<salario && salario<=3000.00){
        valor = (salario-2000.00)*0.08
        console.log(`:R$ ${valor} `)

    }
    
    else if(0<salario && salario<=2000.00){
        valor = Isento
        console.log(`:R$ ${valor} `)
    
    
    
    }
}main()
   
    




