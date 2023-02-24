import prompt from "prompt-sync"
const input = prompt()

export function cadastro(nome, cpf, numero_phone){
    
    // let resgitrar_cliente = retornar_Dados_organizados(cpf)
    
    console.log(`Nome: ${nome}`)
    console.log(`Telefone: ${numero_phone}`)
    console.log(`CPF: ${cpf}`)
    input("Confirme seus dados pressionando <enter>")

}

// cadastro()


// const retornar_Dados_organizados = (numero, pattern){
//   let i = 0

//   const v = numero.toString()

//   return pattern.replace(/#/g, () => v[i++]  || "")
// }

