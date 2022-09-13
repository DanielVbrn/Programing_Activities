import {input} from "../io_utils.js"

function main(){
const pontos = input('Insira um valor para cada ponto da coordenada: ').split(' ').map(Number)
const x1 = pontos[0]
const y1 = pontos[1]
const x2 = pontos[2]
const y2 = pontos[3]

 Math.abs(x1,x2,y1,y2)

 if(x2>x1 && y2>y1){
const area = (x2-x1)*(y2-y1)
console.log(`O valor da área será: ${area}`)
 }else if(x2<x1 && y2<y1){
    const area = Math.abs((x1-x2)*(y1-y2))
    console.log(`O valor da área será: ${area}`)
 }else if(x2>x1 && y1>y2){
   const area = Math.abs((x2-x1)*(y1-y2))
   console.log(`O valor da área será: ${area}`)
 }else if(x1>x2 && y2>y1){
   const area = Math.abs((x1-x2)*(y2-y1))
   console.log(`O valor da área será: ${area}`)
 }



}
main()