import {input,print} from "../io_utils.js"

function main(){
    //Digitar a data no formato: dd/mm/aaaa !!!!
const DataA = input("Insira o dia, o mês e o ano  para a  data A: ").split("/").map(Number)
const DataB = input("Insira o dia, o mês e o ano  para a  data B: ").split("/").map(Number)
const verification_Date = D_maisRecente(DataA,DataB) 
print(`A data mais recente será: ${verification_Date}`)

function D_maisRecente(DataA,DataB){
    const [d1,m1,a1] = DataA
    const [d2,m2,a2] = DataB
    let mais_R
    if(d1>d2){
        mais_R = DataA
    }else{
        mais_R = DataB
    }
    if(m1>m2){
        mais_R= DataA
    }else{
        mais_R= DataB
    }
    if(a1>a2){
        mais_R= DataA
    }else{
        mais_R= DataB
    }return mais_R
}
}
main()