import{input} from "../io_utils.js"
function main(){
    const A = Number(input('Adicione um valor qualquer'));
    const B = Number(input('Adicione um valor qualquer'));
    const C = Number(input('Adicione um valor qualquer'));
    const D = Number(input('Adicione um valor qualquer'));
    
    const DIFERENCA = (A * B - C * D);
    
    console.log(`DIFERENCA = ${DIFERENCA}`);
}
main();
