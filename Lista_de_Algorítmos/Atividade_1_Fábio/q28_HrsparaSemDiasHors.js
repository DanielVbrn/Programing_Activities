import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	let horas = Number(input('Adicione um valor em horas: '))

	//processamento
       let semanas = 0
	   while(horas>=168){
			semanas +=1
		  	horas -=168
		}
		  let dias = 0
		  while(horas>=24){
			dias +=1
			horas -=24
		  }
		 

		  
			
 
	//saída
	
	print(`O valor em semanas: ${semanas}, o valor em dias será: ${dias} e o valor em horas será: ${horas}`)
}main()





