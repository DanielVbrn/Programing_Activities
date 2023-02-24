import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const Fahrenheit = Number(input('Adicione um valor em Fahrenheit: '))

	//processamento
    const Celsius = (5*Fahrenheit-160)/9

	//saída
	print(`O valor em Celsius será :${Celsius}`)
}
main()