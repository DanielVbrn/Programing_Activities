import{input} from "../io_utils.js"
function main(){
    const tempoG = Math.round(Number(input('Adicione um valor')));
    const V_Media = Math.round(Number(input('Adicione um valor')));
    const L_gastos = (V_Media* tempoG)/12;
        
    
        
    console.log(`${L_gastos.toFixed(3)}`);
    }main();