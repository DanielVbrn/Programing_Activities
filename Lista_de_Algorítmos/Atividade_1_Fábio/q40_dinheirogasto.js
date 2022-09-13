import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const anos = Number(input('Adicione a quantidade de anos que a pessoa fuma:'))
    const N_cigarros =  Number(input('Adicione a quantidade de cigarros que ela consome por dia:'))
    const preço = Number(input('Adicione o preço de uma cateira de cigarro:'))

	//processamento
        const gasto = (anos*365)*N_cigarros*(preço/20)
	//saída
	print(`:${gasto}`)
}main()