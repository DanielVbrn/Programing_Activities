import prompt from "prompt-sync"
import * as fs from "fs"
const consoantes = fs.readFileSync("letras_proibidas.txt", 'utf-8')
const input = prompt()

function main(){
    
    let frase = input("Digite uma frase: ").split("")
    const verificar_inversao = frase_invertida(frase)

    console.log(`Frase invertida: ${verificar_inversao}`)
    const verificar_sharp = trocar_consoantes_sharp(frase)
    console.log(verificar_sharp)

}


function frase_invertida(frase){
    let phrase = ""
        for (let c = frase.length - 1; c >= 0 ; c--){
            phrase += frase[c]
        }

    return phrase
}


function trocar_consoantes_sharp(phrase, caracther){
    let change_caracther = ""
    
    for(let i = 0; i < phrase.length; i++){
        if(eh_consoante(phrase[i])){
            change_caracther += caracther
        } else {
            change_caracther += phrase[i]
        }
    }
    return change_caracther
}

function eh_consoante(caracther){
    let letter_forbidden = consoantes.split("")
    
    for(let consoante of letter_forbidden){
        if(consoante === caracther){
            return true
        }
        return false
    }
}

main()