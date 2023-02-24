import{input} from "../io_utils.js"
function main(){
    const A = Number(input('Adicione um valor qualquer').split(" ")[0]);
    const B = Number(input('Adicione um valor qualquer').split(" ")[1]);
    const C = Number(input('Adicione um valor qualquer').split(" ")[2]);
    const pi = 3.14159;
  
    const area_TRIANGULO = (A*C)/2;
    const area_CIRCULO = pi*C**2;
    const area_TRAPEZIO = ((A+B)*C)/2;
    const area_QUADRADO = B**2;
    const area_RETANGULO = A*B;
    console.log(`TRIANGULO: ${area_TRIANGULO.toFixed(3)}`);
    console.log(`CIRCULO: ${area_CIRCULO.toFixed(3)}`);
    console.log(`TRAPEZIO: ${area_TRAPEZIO.toFixed(3)}`);
    console.log(`QUADRADO: ${area_QUADRADO.toFixed(3)}`);
    console.log(`RETANGULO: ${area_RETANGULO.toFixed(3)}`);
}

main()