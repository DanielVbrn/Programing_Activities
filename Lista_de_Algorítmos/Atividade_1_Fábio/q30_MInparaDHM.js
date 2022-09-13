 import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	let minutos = Number(input('Adicione um muero em minutos: '))

	//processamento
    let dias = 0
    while(minutos>=1440){
        dias+= 1
        minutos-=1440
    }

    let horas = 0
    while(minutos>= 60){
        horas+= 1
        minutos-=60


    }
	//saída
	print(`O valor em dias vai ser:${dias}, o valor em horas vai ser: ${horas} e o valor em minutos será; ${minutos}`)
}main()