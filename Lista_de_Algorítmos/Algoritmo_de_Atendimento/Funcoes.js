import * as fs from "fs"
const registro = fs.readFileSync('registros.txt', 'utf-8')
let c = registro.split("\n")
import prompt from "prompt-sync"
const input = prompt()

export function verificacao_entrada(entrada){
    if(entrada === 1){
        return 1
    } else if (entrada === 2){
        return 2
    } else if (entrada === 3){
        return 3
    }

    return false
    
}

export function verificacao_horario(horario){
   
    if (horario === 1){
        return 1
    } else if(horario === 2){
        return 2   
    } else if(horario === 3){
        return 3
    } else if(horario === 4){
        return 4
    }
    return false
}
// verificacao_horario()

 function ultimo_elemento(){
    const tamanho = Number(input("Tamanho do vetor: "))
    let vetor = new Array(tamanho)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Insira um elemento: "))
    }
    // console.log(vetor)

    const ultimo = vetor.slice(-1)
    console.log(ultimo)
}
// ultimo_elemento()

function vetor_padrao(){
    let vetor = new Array("Daniel",20,30,40,50, null)

    const padrao = vetor.fill("Daniel")
    console.log(padrao)
}
// vetor_padrao()

function substituir_caracteristica(){
    const texto = "Disponível"
    const subst = texto.replace("Disponível", "Indisponível")
    console.log(subst)
}
// substituir_caracteristica()

function mapear_nomes(){
    const RG = [
        {name: "Joao", registro: "004"},
        {name: "Daniel", registro: "054"},
        {name: "Maria", registro: "065"},
        {name: "Jorge", registro: "003"},
        {name: "Marcos", registro: "010"},
        
    ]

    const rg = RG.map(NUMERO => NUMERO.registro)
    const names = RG.map(FUNCIONARIO => FUNCIONARIO.name)
    const verificar_cpf = (numero) => (numero.registro === "054")
    const identificar = RG.filter(verificar_cpf)
    console.log(identificar)
    // console.log(`Nome: ${names} \nRegistro do Funcionário: ${rg}`)
    console.table(RG)
}
// mapear_nomes()

function identificar_cliente(){

    const pessoas = [
        {name: "John", CPF: "064.455.253", CF: 01},
        {name: "Marcos", CPF: "064.345.193", CF: 134},
        {name: "Romero", CPF: "064.735.823", CF: 23},
        {name: "Michael", CPF: "065.565.953", CF: 75},
    ]
    // const verificar_cpf = (pessoa) => (pessoa.CPF === "064.345.193")
    // const identificacao = pessoas.filter(verificar_cpf)
    // const filter_identidad = pessoas.filter(person => person.CPF = 75)
    // console.log(identificacao)
    console.log(filter_identidad)
    console.table(pessoas)
}

// identificar_cliente()

//  function mascarar_mask(numero, pattern){
//     let i = 0
//     const v = numero.toString()

//     return numero, pattern.replace(/#/g, () => v[i++]  || "")
// }

// const mask_telefone = mascarar_mask("86994567823" , "(##) # ####-####")
// const mask_CPF = mascarar_mask("06784532803", "###.###.###-##")

// console.log(mask_telefone)
// console.log(mask_CPF)

function gerar_cores(){
    const hex = (Math.random()*0xFFFFFF<<0).toString((16))

    return`#${hex}`
}

export function registro_do_cliente(){
    const array_registros = new Array(5)
    let registros = ['nome', 'CPF', 'endereco']
    for(let i = 0; i < array_registros.length; i++){
        registros = registro.split("\n")
       
    }
    console.log(registros)
     
    

}
// registro_do_cliente()
