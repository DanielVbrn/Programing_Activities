import { input,print } from "../io_utils.js";
    function main(){
        //ENTRADA
        let num_int = 0
        do{
            num_int = Number(input('Adicione um valor com três digitos: '))}
       //PROCESSAMENTO
    while(num_int < 100 || num_int > 999)
        let soma = 0
        let contar = 0
        while(contar<3){
            soma +=(num_int % 10)
            num_int = Math.trunc(num_int/10)
            contar++
    }

     
        //SAÍDA
    print(`O valor será: ${soma}`)
    }
    main()