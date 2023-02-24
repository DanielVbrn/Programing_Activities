import { input,print } from "../io_utils.js";
function main(){
    //Entrada
    const dolar = Number(input('Adicione um valor em dólar: '))
    //Processamento
    const real = dolar * 4.7 
    //Saída
    print(`O valor será ${real}`)


}
main()