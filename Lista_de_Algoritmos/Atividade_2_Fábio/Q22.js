import {input,print} from "../io_utils.js"

function main(){
const começo =  input("Insira o momento em horas e minutos que inicia o jogo: ").split(":").map(Number)
//USAR ":" PARA SEPARAR HORAS DE MINUTOS!
const fim_de_partida =  input("Insira o momento em horas e minutos que finaliza o jogo: ").split(":").map(Number)
const horario = tempo_de_jogo(começo,fim_de_partida)
print(`Duração da partida: ${horario[0]} horas e ${horario[1]} minutos`)

function tempo_de_jogo(inicio,fim){
    const [Hora_I,Minuto_I] = inicio
    const [Hora_F,Minuto_F] = fim
    let horas,minutos
    if(Hora_F>Hora_I){
        if(Minuto_F<Minuto_I){
            minutos +=60
            horas -=1
        } 
            horas = Hora_F-Hora_I
            minutos = Minuto_F- Minuto_I
        }else if(Hora_F<=Hora_I){
            if (minutos>=60){
                minutos -=60
                horas +=1
            }
            const H_P = 23-Hora_I
            const M_P = 60-Minuto_I
            horas = H_P + Hora_F
            minutos = M_P + Minuto_F
        }return [horas,minutos]
    }
}
main()