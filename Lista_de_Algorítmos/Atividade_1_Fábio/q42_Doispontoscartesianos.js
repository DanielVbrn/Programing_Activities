import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const X1= Number(input('Adicione um valor para X1:'))
    const Y1= Number(input('Adicione um valor para Y1:'))
    const X2= Number(input('Adicione um valor para X2:'))
    const Y2 =Number(input('Adicione um valor para Y2:'))

	//processamento
    const distancia = Math.sqrt((X2-X1)**2 + (Y2-Y1)**2)

	//saída
	print(` A distância entre dois pontos será:${distancia}`)
}main()