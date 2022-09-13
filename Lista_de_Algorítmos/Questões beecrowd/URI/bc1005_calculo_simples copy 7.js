import{input} from "../io_utils.js"
function main(){
    const A = Number(input('Insira um valor para A'));
    const B = Number(input('Insira um valor para B'));
    const MEDIA = ((A* 3.5)+(B*7.5))/11;
    
    console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
}
main();