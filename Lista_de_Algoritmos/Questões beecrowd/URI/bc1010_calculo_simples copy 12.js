import{input} from "../io_utils.js"
function main(){
    const A =  Number(input('Adicione uma variável'));
    const B =  Number(input('Adicione uma variável'));
    const C = Number(input('Adicione uma variável'));
    
    const D = Number(input('Adicione uma variável'));
    const E = Number(input('Adicione uma variável'));
    const F = Number(input('Adicione uma variável'));
    const VALOR = (B*C) + (E*F);
    
    console.log(`VALOR A PAGAR: R$ ${VALOR.toFixed(2)}`);
}
main();

