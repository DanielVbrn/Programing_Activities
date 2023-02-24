
import { input } from "../io_utils.js"
function main(){
    const codigo =  input("INSIRA 5 DÍGITOS SEPARADOS PARA DETERMINAR QUAL O CÓDIGO DESEJADO(1, 2, 3, 4, 5): ").split(" ").map(Number)
    //USE "0" PARA O CÓDIGO QUE VOCÊ NÃO QUISER!!!
    //EXEMPLO: 1 2 0 0 5
    const CQ = Number(input('Diga a quantidade de cachorro quente que você quer:'))
    const Xs = Number(input('Diga a quantidade de X-salada que você quer:'))
    const Xb = Number(input('Diga a quantidade de X-bacon que você quer:'))
    const Ts = Number(input('Diga a quantidade de Torrada simples que você quer:'))
    const R = Number(input('Diga a quantidade de refirgerante que você quer:'))
    const c1 = CQ*4
    const c2 = Xs*4.5
    const c3 =  Xb*5
    const c4 = Ts*2
    const c5 = R*1.5
    const V_total = c1+c2+c3+c4+c5 
    console.log(`O valor total a ser pago é: ${V_total}`)
   
    if(codigo[0]==1){
           return true
        }
    if(codigo[1]==2){
          return true
        }
    if(codigo[2]==3){
          return true
        }
    if(codigo[3]==4){
           return true
        }
    if(codigo[4]==5){
           return true
        }  
      
}
main()



