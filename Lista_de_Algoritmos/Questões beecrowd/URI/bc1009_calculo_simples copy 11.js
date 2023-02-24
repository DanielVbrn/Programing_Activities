import{input} from "../io_utils.js"
function main(){
    const salario = Number(input('Adicione um valor'));
    const venda = Number(input('Adicione um valor'));
    const TOTAL = salario + (venda*0.15);
     
    
console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
    
}
main();