import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
    const Frac1 =Number(input('Adicione um valor para o numerador 1: '))
    const Frac2 =Number(input('Adicione um valor para o numerador 2: '))
    const denominador1 = Number(input('Adicione um valor para denominador 1: '))
    const denominador2 = Number(input('Adicione um valor para o denominador 2: '))
	//processamento
       const MultipD = denominador1*denominador2
       const CC1= (MultipD/denominador1)
       const CC2= (MultipD/denominador2)
       const soma = (CC1*Frac1)+(CC2*Frac2)
       
	//saída
	print(`O valor da soma da fração será:${soma}/${MultipD}`)
}main()