import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const Numero= input('Adicione um valor de 4 dígitos:')
        const Num1= Number(Numero [0])
        const Num2= Number(Numero [1])
        const Num3= Number(Numero [2])
        const Num4= Number(Numero [3])
	//processamento
    const soma = Num1+Num2+Num3+Num4
    
	//saída
	print(`A soma dos dígitos será:${soma}`)
}main()