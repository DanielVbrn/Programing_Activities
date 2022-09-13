import {input} from "../io_utils.js"
function main(){
    const numbers = input("Adicione 3 valores: ").split(" ").map(Number)
    const option = input('Insira qualquer valor entre 1 e 3: ')
    const n1 = numbers[0]
    const n2 = numbers[1]
    const n3 = numbers[2]
  
    const verification = option_verif(option)
    console.log(`${verification}`)    

    function option_verif(option){
        let O = 0
            if (option == 1)
            return 1
            if (option == 2) 
            return 2
            if (option == 3)
            return 3
        }
}
main()

