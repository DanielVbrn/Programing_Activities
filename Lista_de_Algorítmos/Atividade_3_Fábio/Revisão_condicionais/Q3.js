import {input} from "../../io_utils.js"

function main(){
const letra = input("Insira uma letra qualquer: ")
if(letra == 'a' || letra == 'e' ||letra == 'i' ||letra == 'o' ||letra == 'u' ){
    console.log('É vogal!')
}else{
    console.log('É consoante!')    
}




}
main()