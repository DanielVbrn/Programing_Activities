import{input} from "../io_utils.js"
function main(){
    const IDDdays = Math.abs(Number(input('Adicione um valor em dias')));
    
    const years = Math.floor(IDDdays/365)
    
    const months = Math.floor(IDDdays%365/30)
    
    
  
    console.log(`${years} ano(s)`);
    console.log(`${months} mes(es)`);
    console.log(`${IDDdays%365%30} dia(s)`);
    
    }
    main();