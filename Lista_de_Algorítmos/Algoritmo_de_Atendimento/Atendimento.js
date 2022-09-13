import * as fs from 'fs'
import prompt from 'prompt-sync'
import { cadastro } from './cadastro_do_cliente.js'
import { verificacao_horario , verificacao_entrada } from './Funcoes.js'
const input = prompt()

function main(){
  let recepcao = ">>Para ter acesso aos atendimentos oferecidos pela nossa clínica inisra seus dados abaixo: \n\n"
  console.log(recepcao)
  let nome = input("Nome > ")
  let numero_phone = Number(input("Número de Telefone> "))
  let cpf = Number(input("CPF> "))
  console.clear()
  const verification_C = cadastro(nome, numero_phone, cpf)
  console.log(verification_C)
  

  let inicio = "Olá cliente, em que posso ajudar?"
  
  inicio += "\n1 - Agendamento de consulta."
  inicio += "\n2 - Atualizar o plano de saúde."
  inicio += "\n0 - Sair"
  console.log(inicio)
  let num  
  console.clear()
  
  if (num === 0){
    console.log('Fim')
  }
  
  let entrada
  let horario


  while (num !== 0){

    console.log(inicio)
    num = Number(input("Insira um qual opção deseja(1 ou 2): "))
    console.clear()
    if (num === 1){
      let dia = "Insira para qual dia da semana e para qual horário você quer agendar sua consulta: "
        dia += "\n1- quarta-feira"
        dia += "\n2- quinta-feira"
        dia += "\n3- sexta-feira"
        
        let time = ""
        time += "\n1 - 8:30 AM."
        time += "\n2 - 10:00 AM."
        time += "\n3 - 15:30 PM."
        time += "\n4 - 17:00 PM."

        console.log(`${dia} \n----------------------------///////////////------------------------- ${time}`)

      entrada = Number(input("Dia: "))
      horario = Number(input("Horário: "))
      console.clear()

      let data_dia = dia_de_atendimento(entrada)
      let data_hora = horario_da_consulta(horario)
      console.log(`${data_dia}`)
      console.log(`${data_hora}`)
      
    } else if(num === 2){
      const verification = atendimento2()
      console.log(verification)
      
    }
    console.log("\n\n\n")
    console.log('>>>>>> Processo finalizado com sucesso <<<<<')
    input("-----> Pressione <enter> para retornar a tela de início.")
    console.clear()   
  }

}

function dia_de_atendimento(entrada){
  let k = verificacao_entrada(entrada) ;
  if(k === 1){
    return "Sua consulta foi agendada para quarta-feira."
  } else if (k === 2){
    return "Sua consulta foi agendada para quinta-feira."
  } else if (k === 3){
    return "Sua consulta foi agendada para sexta-feira."
  }else{
    return false
  }
  
} 


function horario_da_consulta(horario){
  const j = verificacao_horario(horario)
  if(j === 1){
    return 'Sua consulta ocorrerá no horário da manhã às 08:30.'
  } else if(j === 2){
    return 'Sua consulta ocorrerá no horário da manhã às 10:00.'
  } else if(j === 3){
    return 'Sua consulta ocorrerá no horário da tarde às 17:00.'

  } else if(j === 4){
    return 'Sua consulta ocorrerá no horário da tarde às 17:00.'

  }
  return false

}
  

function atendimento2(){
  let plano = "Para qual plano você deseja mudar?"
    plano += "\n1- Plano 1"
    plano += "\n2- Plano 1"
    plano += "\n3- Plano 3"
    console.log(plano)
  let entrada = Number(input("> "))
  console.clear()

  if (entrada === 1){
    console.log("O plano 1 custa um total de R$ 350 + todos os benefícios inclusos. ")
    input('Pressione <enter> para finalizar.')
  
  } else if(entrada === 2){
    console.log( 'O plano 2 custa um total de R$  200 + benefício 1. ')
    input('Pressione <enter> para finalizar.')

  } else if(entrada == 3){
    console.log( 'O plano 3 custa um total de R$ 150.')
    input('Pressione <enter> para finalizar. ')
  
  }


}



main()