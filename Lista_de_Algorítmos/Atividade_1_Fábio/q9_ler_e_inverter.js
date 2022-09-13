import{ input,print } from '../io_utils.js'
    function main(){
        //entrada
        let X = []
        X[0] = Number(input('Adicione um número:'))
        X[1] = Number(input('Adicione um número:'))
        //processamento
            X.reverse()
        //saída    
            print(`o inverso será ${X}`)
    }
    main()