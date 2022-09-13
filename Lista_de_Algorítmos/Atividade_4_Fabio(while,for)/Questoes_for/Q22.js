import prompt from "prompt-sync"
const input = prompt()


function main(){
    const N = Number(input("Quantidade de fichas : "))
    let nome, peso, id, maior, menor
    maior = Number(input("Maior:"))
    menor = Number(input("Menor : "))
    let id_menor, id_maior
    let nome_maior, nome_menor
    

    
    for(let i = 0  ; i < N ; i++){
        nome = input("Nome: ")
        peso = Number(input("Peso: "))
        id = Number(input("Número de identificação: "))
        if(peso > maior){
            maior = peso
            id_maior = id
            nome_maior = nome
        }
        if(peso < menor){
            menor = peso
            id_menor = id
            nome_menor = nome
        }
        
        
    }
    console.log(`Boi ${nome_maior}, de identificação ${id_maior} pesa um total de ${maior} kg, possuindo o maior peso.`)
    console.log(`Boi ${nome_menor}, de identificação ${id_menor} pesa um total de ${menor} kg, possuindo o menor peso.`)





    
}
main()