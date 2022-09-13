import {input} from "../../io_utils.js"

function main(){
const preco = input("Insira 3 preços para determinados produtos: ").split(" ").map(Number)
if(preco[0] < preco[1] && preco[0] < preco[2]){
    console.log(`O comprador deve optar pelo produto de ${preco[0]} reais`)
}else if(preco[1] < preco[0] && preco[1] < preco[2]){
    console.log(`O comprador deve optar pelo produto de ${preco[1]} reais`)
}else{
    console.log(`O comprador deve optar pelo produto de ${preco[2]} reais`)

}


}
main()