import {input} from "../io_utils.js"

function main(){
    const n = input("Digite 5 números: ").split(" ").map(Number)
    const n1 = n[0]
    const n2 = n[1]
    const n3 = n[2]
    const n4 = n[3]
    const n5 = n[4]
    const verification = maior(n1,n2,n3,n4,n5)
    const verification2 = menor(n1,n2,n3,n4,n5)
    console.log(`O maior valor é: ${verification} e o menor é: ${verification2}  `)
}
main()

function maior(n1,n2,n3,n4,n5){
    if(n2<n1 && n3<n1 && n4<n1 && n5<n1){
        return n1
    }else if(n1<n2 && n3<n2 && n4<n2 && n5<n2){
        return n2
    }else if(n1<n3 && n2<n3 && n4<n3 && n5<n3){
        return n3
    }else if(n1<n4 && n2<n4 && n3<n4 && n5<n4 ){
        return n4
    }else if(n5){
        return n5
    }
}


function menor(n1,n2,n3,n4,n5){
    if(n2>n1 && n3>n1 && n4>n1 && n5>n1){
        return n1
    }else if(n1>n2 && n3>n2 && n4>n2 && n5>n2){
        return n2
    }else if(n1>n3 && n2>n3 && n4>n3 && n5>n3){
        return n3
    }else if(n1>n4 && n2>n4 && n3>n4 && n5>n4 ){
        return n4
    }else if(n5){
        return n5
    }
}