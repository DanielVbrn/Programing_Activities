import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const base = Number(input('Adicione a base do retangulo: '))
    const altura = Number(input('Adicione a altura do retangulo: '))
   
	//processamento
    const area = base * altura
	//saída
    print(`O valor da área será:${area}`)
}main()