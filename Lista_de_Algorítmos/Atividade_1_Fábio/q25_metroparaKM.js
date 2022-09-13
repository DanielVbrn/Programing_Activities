import{ input,print } from '../io_utils.js'
	function main(){
		//entrada
	const Num1= Number(input('Adicione um número inteiro em metro: '))
		//processamento
	const kilometro = Num1/1000
	const math = Math.abs(kilometro)*1000


		//saida
	print(`O resultado em kilômetro será :${kilometro} e o valor em metro será ${math}`)
}main()