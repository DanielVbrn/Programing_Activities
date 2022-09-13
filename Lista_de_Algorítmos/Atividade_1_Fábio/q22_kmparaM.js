import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const Km = Number(input('Adicione um valor em Kilômetro: '))

	//processamento
    const metro= Km*1000
	//saída
	print(`O valor metro será:${metro}`)
}
main()