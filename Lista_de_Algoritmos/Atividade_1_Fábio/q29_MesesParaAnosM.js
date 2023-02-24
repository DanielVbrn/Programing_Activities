import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	let Months = Number(input('Adicicone um valor inteiro em meses:'))
	//processamento
        let anos= 0 
        while(Months >= 12){
        anos += 1
        Months-=12}
	//saída
	print(`O valor em anos será:${anos} e ${Months}meses `)
}main()