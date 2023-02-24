import{input} from "../io_utils.js"
function main(){
    const pi =   3.14159;
    const R = Number(input('Adicione um valor para o raio'));
    const VOLUME = (4/3) * pi * R**3;
    
    console.log(`VOLUME = ${VOLUME.toFixed(3)}`);
    
}
main();