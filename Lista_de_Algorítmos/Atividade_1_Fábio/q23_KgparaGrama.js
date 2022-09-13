import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const Kilograma = Number(input('Adicione um valor em kilograma: '))

	//processamento
        const grama = Kilograma*1000
	//saída
	print(`O valor em gramas será:${grama}`)
}
main()