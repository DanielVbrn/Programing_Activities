import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const A = Number(input('Adicione um valor numérico:'))
    const B = Number(input('Adicione um valor numérico:'))
    const C = Number(input('Adicione um valor numérico:'))
   
	//processamento
    const R = (A+B)**2
    const S = (B+C)**2
    const D = (R+S)/2

	//saída
	print(`O valor da expressãos D será:${D}`)
}main()