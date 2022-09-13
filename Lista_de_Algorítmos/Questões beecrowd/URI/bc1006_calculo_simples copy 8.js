import{input} from "../io_utils.js"
function main(){
    const A = Number(input('Adicione um valor qualquer'))
    const B = Number(input('Adicione um valor qualquer'))
    const C = Number(input('Adicione um valor qualquer'))
    const MEDIA = ((A*2)+(B*3)+(C*5))/10
    
    console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
}
main();