import{ input,print } from '../io_utils.js'
    function main(){
        //Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
	const base = Number(input('Adicione um valor para a base do triangulo:'))
    const altura=  Number(input('Adicione um valor para a altura do triangulo:'))
    const area = (base*altura)/2


    print(`O valor da area será:${area}`)
}main()