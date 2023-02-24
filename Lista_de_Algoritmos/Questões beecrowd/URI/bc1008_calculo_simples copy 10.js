import{input} from "../io_utils.js"
function main(){
    
    const funcionario1 = Number (input('adicione um numero para o funcionário'));
    const horas = Number (input('Adicione um valor em horas'));
    const valor_hr = Number (input('Adicione um valor'));
    const SALARY = horas * valor_hr;
    
    
    console.log(`NUMBER = ${funcionario1}`); 
    console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);
}
main();