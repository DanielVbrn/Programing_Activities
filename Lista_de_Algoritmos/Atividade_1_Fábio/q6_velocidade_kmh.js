import { input,print } from "../io_utils.js";
    function main(){
        //ENTRADA
        const velocidade_khm = Number(input('Adicione um valor em kmh: '))
        //PROCESSAMENTO
        const velocidade_ms = velocidade_khm/3.6
        //SAÍDA
        print(`O resultado será ${velocidade_ms}`)

    }
    main()