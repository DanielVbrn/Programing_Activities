import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const Num1 = Number(input('Adicione um número:'))
    const Num2 = Number(input('Adicione um número:'))
    const Num3 = Number(input('Adicione um número:'))
	//processamento
        const media = (Num1+Num2+Num3)/3
        
	//saída
	print(`A media será:${media}`)
}main()