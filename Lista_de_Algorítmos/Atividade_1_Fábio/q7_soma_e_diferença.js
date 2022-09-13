import{input,print} from '../io_utils.js'
    function main(){
        
     //entrada
        const num1= Number(input('Adicione um número:'))
        const num2= Number(input('Adicione um número:'))
        const num3= Number(input('Adicione um número:'))
     //processamento
            const ddo1= num1+num2
            const ddo2= num2-num3
            
    //saída    
        print(`O resultado desse calculo será: ${ddo1}`)
        print(`O resultado desse calculo será: ${ddo2} `)
    }
    main()