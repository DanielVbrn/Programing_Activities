import{input} from "../io_utils.js"
function main(){
    const A = Number(input('Adicione um número'))
    const B = Number(input('Adicione um número'))
    const C = Number(input('Adicione um número'))
    const MAIOR_AB =  (A+B+Math.abs(A-B))/2
    const SOMA = (MAIOR_AB+C+Math.abs(MAIOR_AB-C))/2
    
    console.log(`${SOMA} eh o maior`)
}
main()



