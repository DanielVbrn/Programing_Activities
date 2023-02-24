import { input } from "../io_utils.js"

function main() {
    let frase = input("Escreva uma frase: ")
    
    const caracters = frase.split("").length
    console.log(`A frase possui ${caracters} caracteres.`)
    while(caracters < 80 || caracters > 180){
        frase = input("Escreva uma nova frase: ")
    }
 

    const contar = frase.split(" ").length
    console.log(`A frase possui ${contar} palavras.`)


}
main()