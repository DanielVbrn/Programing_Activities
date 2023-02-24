import { input } from "../io_utils.js"

function main() {
    //ENTRADA
    const idade = Number(input("Insira uma idade qualquer: "))
    const Frequencia_Atual = Number(input("Insira a sua frequência atual: "))  
    const FC_max = 220 - idade
    const zona_atual = (Frequencia_Atual * 100)/FC_max
    
    //PROCESAMENTO
    const Atividade_Moderada = FC_max * 0.5
    const Atividade_Moderada_2 = FC_max * 0.59
    const Controle_Peso = FC_max * 0.6
    const Controle_Peso_2 = FC_max * 0.69
    const Aerobio = FC_max * 0.7
    const aerobico2 = FC_max * 0.79
    const anaerobico = FC_max * 0.8
    const anaerobico2 = FC_max * 0.89
    const esforço_Maximo = FC_max * 0.9
    const esforço_Maximo_2 = FC_max * 1

    //SAIDA
    console.log(`A sua zona atual de frequência cardíaca é: ${zona_atual.toFixed(2)}`)

    console.log(`A sua zona de atividade moderada é entre ${Atividade_Moderada.toFixed(2)} e ${Atividade_Moderada_2.toFixed(2)}`)

    console.log(`A sua zona de controle de peso é entre ${Controle_Peso.toFixed(2)} e ${Controle_Peso_2.toFixed(2)}`)
    console.log(`A sua zona de atividade aeróbica é entre ${Aerobio.toFixed(2)} e ${aerobico2.toFixed(2)}`)
    console.log(`A sua zona de atividade anaeróbica é entre ${anaerobico.toFixed(2)} e ${anaerobico2.toFixed(2)}`)
    console.log(`A sua zona de esforço máximo é entre ${esforço_Maximo.toFixed(2)} e ${esforço_Maximo_2.toFixed(2)}`)

}
main()