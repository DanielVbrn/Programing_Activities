import prompt from "prompt-sync";
const input = prompt()

function main(){
    let prova =  Number(input("Insira o número da prova: ")) 
 
    let contador = 0
    while(prova !== 0){
        nome_quantidade_nadadores()
        
        contador++


    }
    console.log(`prova de número: ${contador}`)

}




function nome_quantidade_nadadores(){
    let qtd_nadadores = Number(input("Insira a quantidade de nadadores: "))
    let nomes = input("Insira um nome para cada nadador: ").split(" ")
    const contar_nomes = nomes.length

    if(qtd_nadadores === contar_nomes){
        for( let contador_posicao  = 0 ; contador_posicao < qtd_nadadores ; contador_posicao++){
            
            console.log(nomes)
            console.log(`A prova possui ${contar_nomes} nadadores.`)
            console.log(`Nadador ${nomes} na posição - ${contador_posicao}`)


      }
      
    }
    
}



main()