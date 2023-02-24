import{ input,print } from '../io_utils.js'
	function main(){
	//entrada
	const A = Number(input('Adicione um valor para A:'))
    const B = Number(input('Adicione um valor para B:'))
    const C = Number(input('Adicione um valor para C:'))
    const D = Number(input('Adicione um valor para D:'))
    const E = Number(input('Adicione um valor apara E:'))
    const F = Number(input('Adicione um valor para F:'))
	//processamento
        const X = ((C*E)-(B*F))/((A*E)-(B*D)).toFixed(2)
        const Y = ((A*F)-(C*D))/((A*E)-(B*D)).toFixed(2)
	//saída
	print(`O valor de X será: ${X} e o de Y será: ${Y}`)
}main()