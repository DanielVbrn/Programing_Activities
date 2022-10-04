function soma(x:number, y:any){
    return x+y;
}

function verificarSomaNUm(){
    console.log(soma(4, 5))
}verificarSomaNUm()
function verificarSomaStr(){
    console.log(soma(4, "5"))
}verificarSomaStr()
function verificarSomaVazio(){
    console.log(soma(4))
}verificarSomaVazio()