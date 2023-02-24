import{ input,print } from '../io_utils.js'
    function main(){
	//entrada

	const raio = Number(input('Escreva o valor do raio: '))
    const pi = 3.14
    const num = 2
	//processamento
        const comprimento = num*pi*raio
	//saída
print(`O valor do comprimento da circunferência será:${comprimento}`)

}main()