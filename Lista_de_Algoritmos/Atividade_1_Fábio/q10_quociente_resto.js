import{ input,print } from '../io_utils.js'
    function main(){
        //Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
        //entrada
       const num1= Number(input('Adicione um valor:'))
       const num2= Number(input('Adicione um valor:'))
       //processamento
        const div = num1/num2
        const resto = num1%num2
        //saída
        print(`O valor do resto será :${resto} /e o quociente será: ${div} `)

    }
        main()