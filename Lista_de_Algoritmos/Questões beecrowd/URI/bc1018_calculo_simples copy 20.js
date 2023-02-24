import{input} from "../io_utils.js"
function main(){
    let VALOR_P = Number(input('Adicione um valor'));
   
    let rest = VALOR_P;
   
    const DV100 = Math.trunc(rest/100);
    rest = rest % 100;
      const DV50 = Math.trunc(rest/50);
    rest = rest % 50;
      const DV20 = Math.trunc(rest/20);
    rest = rest % 20;
      const DV10 = Math.trunc(rest/10);
    rest = rest % 10;
      const DV5 = Math.trunc(rest/5);
    rest = rest % 5;
      const DV2 = Math.trunc(rest/2);
    rest = rest % 2;
      const DV1 = rest;
     console.log (`${VALOR_P}`);
    console.log(`${DV100} nota(s) de R$ 100,00`);
    console.log(`${DV50} nota(s) de R$ 50,00`);
    console.log(`${DV20} nota(s) de R$ 20,00`);
    console.log(`${DV10} nota(s) de R$ 10,00`);
    console.log(`${DV5} nota(s) de R$ 5,00`);
    console.log(`${DV2} nota(s) de R$ 2,00`);
    console.log(`${DV1} nota(s) de R$ 1,00`);
   
    }
    main();