import{ input,print } from '../io_utils.js';
function main(){
    //Entrada
    const horas = Number(input('Adicione um valor: '));
    //Processamento
    const minutos = horas*60
    //Saída
    print(`o valor em minutos será ${minutos}`)
}
main()