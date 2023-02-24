import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const quantidade = Number(input('Informe a quatidade em Kg de componentes: '))

	//processamento
        const cobre = (quantidade*0.7).toFixed(2)
        const zinco = (quantidade*0.3).toFixed(2)
        
	//saída
	print(`A quantidade de cobre será :${cobre} e a quantidade de zinco será: ${zinco}`)
}main()