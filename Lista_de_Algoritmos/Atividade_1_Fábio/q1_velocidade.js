import { input, print } from "../io_utils.js";
 function main(){  
         //Entrada    
    const velocidade_ms = Number(input('adicione um valor numérico: '));

        //Processamento
    const velocidade_khm =  velocidade_ms * 3.6

        //Saída
    print(`O valor será ${velocidade_khm}`)


 }
 main()
 