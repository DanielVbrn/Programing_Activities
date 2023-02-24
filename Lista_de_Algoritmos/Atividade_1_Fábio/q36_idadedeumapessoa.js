import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	(input('Adicione uma idade: '))
    //processamento
    const anos = Number(input('Adicione um valor em anos: '))
    const meses = Number(input('Adicione um valor em meses: '))
    const dias = Number(input('Adicione um valor em dias: '))
        const idade = (anos*365)+(meses*30)+dias
    
	//saída
	print(`A idade em quantidade de dias será: ${idade}`)
}main()