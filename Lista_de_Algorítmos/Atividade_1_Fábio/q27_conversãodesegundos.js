import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	let segundos = Number(input('Adicione um valor inteiro em segundos'))

	//processamento
   let horas = 0
   while(segundos>=3600){
	   horas += 1
	   segundos-=3600

   }
   let minutos = 0
	while(segundos>=60){
		minutos +=1
		segundos-=60



	}


	//saída
	print(`O valor em horas será:${horas}/ O valor em minutos será : ${minutos}/ O valor em segundos será: ${segundos}`)
}main()



