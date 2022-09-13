import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const Fabrica = Number(input('Adicione o valor do custo de fábrica: '))
    
	//processamento
    const Pdistribuidor= Fabrica + (Fabrica*0.28)
    const impostos = Fabrica + (Fabrica*0.45)
    const consumidor =Pdistribuidor+impostos 
    
	//saída
	print(`O valor do gasto do consumidor será:${consumidor} eo custo de produção será: ${Pdistribuidor}`)
}main()