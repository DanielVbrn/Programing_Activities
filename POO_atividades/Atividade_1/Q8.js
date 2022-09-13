import * as fs from "fs"
const input = fs.readFileSync("Arquivo.txt", "utf-8")
const leitura = input.split("")
// import prompt from "prompt-sync"
// const input = prompt()


function main(){
    // const text = input("Insira uma frase: ")
    const texto = leitura
    console.log(`Frase: ${texto}`)
    const vogais_sem_acento = trocar_vogais(texto)
    console.log(`Frase sem acento: ${vogais_sem_acento}`)
}

function trocar_vogais(text){
    let N_phrase = ""
    const sem_acento = "AAAAEEEIIOOUUaaaaeeeiiiooouu"
    const com_acento = "ÂÃÀÁÈÉÊÌÍÒÓÙÚáàâãéèêíìîóòôúù"
    let subst 
    let i = 0
    
    for(let item of text){
        subst = false

        while(i < com_acento.length){
            if(item === com_acento[i]){
                N_phrase += sem_acento[i]
                subst = true
                i++
            }
        }
        if(subst === false){
            N_phrase += item
            
        }


    }
    return N_phrase
}





main()