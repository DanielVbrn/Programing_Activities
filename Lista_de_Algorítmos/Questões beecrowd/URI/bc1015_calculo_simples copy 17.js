import{input} from "../io_utils.js"
function main(){
    
    const XY1 = Number(input('Adicione um valor').split(" "));
    
    const XY2 = Number(input('Adicione um valor').split(" "));
    
    const X1 = Number(XY1);
    
    const Y1 = Number(XY1);
    
    const X2 = Number(XY2);
    
    const Y2 = Number(XY2);
    
    const C = (X2-X1)**2;
    const D = (Y2-Y1)**2;
    const Distance = C+D;
    
    console.log(`${Math.sqrt(Distance).toFixed(4)}`);
    }
    main();