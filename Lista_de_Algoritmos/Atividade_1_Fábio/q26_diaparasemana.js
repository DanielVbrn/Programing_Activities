import{ input,print } from '../io_utils.js'
	function main(){
        //entrada
	let Dias = Number(input('Adicione um valor inteiro em dias: ')) 
        //processamento
        let semanas = 0
        while( Dias>=7){
                semanas += 1 
                Dias -= 7

        }
        
        //saída
	print(`O resultado em semanas será:${semanas} e o resultado em dias vai ser :${Dias} `)
}main()