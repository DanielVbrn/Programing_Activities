import{input} from "../io_utils.js"

function main(){
    const num = Number(input("Adicione um núemro para ser lido: "))
    const impar_ou_par = num%2
    
    
     if(impar_ou_par==1){
         console.log('É ímpar')
     }else if(impar_ou_par==0){
         console.log('É par')
     }


}
main()

