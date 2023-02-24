import{ input,print } from '../io_utils.js'
    function main(){
        //ENTRADA
        
        const numeroA= Number(input('Adicione um valor qualquer:')) 
        const numeroB = Number(input('Add um valor:'))

        //PROCESSAMENTO

        const soma =numeroA+numeroB
        const diferenca =numeroA-numeroB
        const soma_divisão = soma/diferenca
    
        //SAÍDA
        
        print(`O resultado será ${soma_divisão.toFixed(2)}`)
    }
    main()