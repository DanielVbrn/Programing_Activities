import{ input,print } from '../io_utils.js'
    function main(){
	//entrada
	const raio = Number(input('Adicione o valor do raio: '))
    const pi = 3.14
    const num = 4
    
	//processamento
    const volume =(num*pi*raio**3)/3
	//saída
	print(`O valor do volume da esfera será:${volume}`)
}
main()