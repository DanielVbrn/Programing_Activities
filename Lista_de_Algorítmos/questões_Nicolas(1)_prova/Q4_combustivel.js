import { input } from "../io_utils.js"

function main() {
    //ENTRADA
    const R_com_alcool = Number(input("Insira o rendimento do veículo com alcool: "))
    const R_com_gasolina= Number(input("Insira o rendimento do veículo com gasolina: "))
    const distancia_percorrida = Number(input("Distancia: "))

    const preco_alcool = Number(input("Preço do alcool: "))
    const preco_gasolina = Number(input("Preço da gasolina: "))


    //PROCESSAMENTO
    const litro = distancia_percorrida / R_com_alcool
    const total_pago_Alcool = litro * preco_alcool
    const litro_2 = distancia_percorrida / R_com_gasolina
    const total_pago_Gaso = litro_2 * preco_gasolina

    //SAIDA
    console.log(`O valor a ser pago com alcool é: ${total_pago_Alcool.toFixed(2)} reais`)
    console.log(`O valor a ser pago com gasolina é: ${total_pago_Gaso.toFixed(2)} reais`)



}
main()