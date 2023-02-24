import{ input,print } from '../io_utils.js'
    function main(){
        //entrada
        const nota1= Number(input('Adicione uma nota:'))
        const nota2= Number(input('Adicione uma nota:'))
        const nota3= Number(input('Adicione uma nota:'))
        
        const peso1 =  Number(input('Adicione um peso:'))
        const peso2 =  Number(input('Adicione um peso:'))
        const peso3 =  Number(input('Adicione um peso:'))
        //processamento
            const resultante = (nota1*peso1+nota2*peso2+nota3*peso3)/3
        //saída
            print(`O valor das notas com peso será: ${resultante} `)

    }
    main()