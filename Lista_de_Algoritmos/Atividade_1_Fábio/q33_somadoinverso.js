import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const Num1 = Number(input('Adicione um numero de três digitos:'))
    
	//processamento
     const centena = Math.trunc(Num1/100)
     const resto = Num1%100
     const dezena = Math.trunc(resto/10)
     const rest = resto%10
     const Num2 = rest*100 + dezena*10 +centena
        const adicao = Num1+Num2
	//saída
	print(`O inverso será:${Num2} e soma do inicial com o inverso será : ${adicao}`)
}main()
