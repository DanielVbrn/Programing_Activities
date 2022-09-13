import{input} from "../io_utils.js"
function main(){
    const Km= Number(input('Adicione um valor'));
    const minutos = (60*Km)/30;
        
    
        
    console.log(`${Math.round(minutos)} minutos`);
}
main();