import{input} from "../io_utils.js"
function main(){
    const pi = 3.14159;
    const R = Number(input('Adicione um valor para o raio'));
    const area = pi*R**2;
    
    console.log(`A=${area.toFixed(4)}`);

}
main();