import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const Celsius = Number(input('Adicione um valor em Celsius: '))

	//processamento
    const Fahrenheit = (9*Celsius+ 160)/5 

	//saída
	print(`O valor em Fahrenheit vai ser:${Fahrenheit}`)
}
main()