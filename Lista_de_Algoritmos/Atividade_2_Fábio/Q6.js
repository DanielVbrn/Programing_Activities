import {input} from "../io_utils.js"
function main() {
 
    const angulo = input('Adicione 3 valores para os ângulos de um triângulo: ').split(' ').map(Number)
 
    const A = angulo[0]
    const B = angulo[1]
    const C = angulo[2]
 
    console.log(`${verification_triangulo(A, B, C)}`)
 
    if(eh_acutangulo(A, B, C)) {
        console.log("é acutângulo")    
    } else if(eh_retangulo(A, B, C)) {
        console.log("é retângulo") 
    } else if (eh_obtusangulo(A, B, C)) {
        console.log("é obtusângulo")
    }
 
}
 
main()
 
function verification_triangulo(A, B, C) {
    if(A + B + C === 180) {
        return 'É triangulo'
    } else {
        return 'Não é triangulo'
    }
}
 
function eh_acutangulo(A, B, C) {
 
    return (A<90 && B<90 && C<90)
 
}
 
function eh_retangulo(A, B, C) {
 
    return (A===90 || B===90 || C===90)
 
}
 
function eh_obtusangulo(A, B, C) {
 
    return (A>90 || B>90 || C>90)
 
}