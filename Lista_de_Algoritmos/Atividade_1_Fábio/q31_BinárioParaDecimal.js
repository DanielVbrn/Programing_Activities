import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const binario = input('Adicione um valor de 4 digitos em binário:')

	//processamento
        const c1= Number(binario [0])
        
        const c2= Number(binario [1])

        const c3= Number(binario [2])

        const c4= Number(binario [3])

        const decimal = (c1*2**3)+(c2*2**2)+(c3*2**1)+(c4*2**0)

	//saída
	print(`O valor em decimal será:${decimal}`)
}main()