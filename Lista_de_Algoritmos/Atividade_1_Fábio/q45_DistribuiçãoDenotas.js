import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const numero = Number(input('Adicione um valor qualquer :'))
    
	//processamento

    let resto = numero
    
    const decomposiçao100 = Math.trunc(resto/100)
    resto = resto%100
    
    const decomposiçao50 = Math.trunc(resto/50)
    resto = resto%50
    
    const decomposiçao20 = Math.trunc(resto/20)
    resto = resto%20
    
    const decomposiçao10 = Math.trunc(resto/10)
    resto = resto%10

    const decomposiçao5  = Math.trunc(resto/5)
    resto =resto%5
    
    const decomposiçao1 = resto



	//saída
	print(`O valor de nostas de 100 reais será:${decomposiçao100}, 
    o valor de notas de 50 reais será: ${decomposiçao50}, 
    o valor de notas de 20  reais  será: ${decomposiçao20}, 
    o valor de notas de 10  reais será: ${decomposiçao10}, 
    o valor de notas de 5  reais será: ${decomposiçao5},
    o valor de notas de 1  reais será: ${decomposiçao1} `)
}main()