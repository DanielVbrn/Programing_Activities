import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	let dias  = Number(input('Adicione uma um quantidade de dias qualquer:'))

	//processamento
        let anos = 0
        while(dias>=365){
            anos +=1
            dias -=365
        }
        let meses = 0
        while(dias>=30){
            meses +=1
            dias -=30
        }
	//saída
	print(`A idade em anos será:${anos}, em meses será: ${meses} e em dias vai ser: ${dias}`)
}main()