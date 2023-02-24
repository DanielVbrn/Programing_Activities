import{input} from "../io_utils.js"
function main(){
    const distancia = Number(input('Adicione um valor'));
    
    const consumo = Number(inpit('Adicione um valor'));
    
    const gasto =  distancia/consumo;
    
    console.log(`${gasto.toFixed(3)} km/l`);
}
main();