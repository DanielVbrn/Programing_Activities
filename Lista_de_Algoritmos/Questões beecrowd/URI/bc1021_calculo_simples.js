import{input} from "../io_utils.js"
function main(){
    let ValorD = Number(input('Adicione um numero'));
    let sobra = ValorD;
    
    const decomposicao100 = Math.floor(sobra/100);
    sobra = sobra%100;
    const decomposicao50 = Math.floor(sobra/50);
    sobra = sobra%50;
    const decomposicao20 = Math.floor(sobra/20);
    sobra = sobra%20;
    const decomposicao10 = Math.floor(sobra/10);
    sobra = sobra%10;
    const decomposicao5  = Math.floor(sobra/5);
    sobra =sobra%5;
     const decomposicao2  = Math.floor(sobra/2);
    sobra =sobra%2;

    const decomposicao1 = Math.floor(sobra/1);
    sobra = sobra%1
    const decomposicao050 = Math.floor(sobra/0.50);
    sobra = sobra%0.50
    const decomposicao025 = Math.floor(sobra/0.25);
    sobra = sobra%0.25
    const decomposicao010 = Math.floor(sobra/0.10);
    sobra = sobra%0.10
    const decomposicao005 = Math.floor(sobra/0.05);
    sobra = sobra%0.05
    const decomposicao001 = sobra;
    
    console.log(`NOTAS:`);
    console.log(`${decomposicao100} nota(s) de R$ 100.00`);
    console.log(`${decomposicao50} nota(s) de R$ 50.00`);
    console.log(`${decomposicao20} nota(s) de R$ 20.00`);
    console.log(`${decomposicao10} nota(s) de R$ 10.00`);
    console.log(`${decomposicao5} nota(s) de R$ 5.00`);
    console.log(`$${decomposicao2} nota(s) de R$ 2.00`);
    console.log(`MOEDAS:`);
    console.log(`${decomposicao1} moeda(s) de R$ 1.00`);
    console.log(`${decomposicao050} moeda(s) de R$ 0.50`);
    console.log(`${decomposicao025} moeda(s) de R$ 0.25`);
    console.log(`${decomposicao010} moeda(s) de R$ 0.10`);
    console.log(`${decomposicao005} moeda(s) de R$ 0.05`);
    console.log(`${decomposicao001} moeda(s) de R$ 0.01`);
    
    }
    main();