import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const CUSTO = Number(input('Adicione um valor a ser pago em determinada mercadoria: '))
   
	//processamento
    const PRESTACAO = Math.trunc(CUSTO/3)
    const ENTRADA = CUSTO - PRESTACAO*2

	//saída
	print(`o VALOR DA ENTRADA SERÁ: ${ENTRADA} E O VALOR DE CADA PRESTAÇÃO SERÁ: ${PRESTACAO}`)
}main()