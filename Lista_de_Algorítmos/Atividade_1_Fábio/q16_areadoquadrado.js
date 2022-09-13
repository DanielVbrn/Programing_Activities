import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const lado = Number(input('Adicione um valor para o lado do quadrado: '))
	//processamento
        const area = lado**2
	//saída
    print(`O valor da area será:${area}`)
}main()