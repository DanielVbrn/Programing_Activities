import {input} from "../io_utils.js"

function main(){
        const num = input("insira dois valores: ").split(" ").map(Number)
        const n1 = num[0]
        const n2 = num[1]
        const R = one(n1,n2)
        console.log(R)

    function one(x,y){
        let rest = x%y, R
        if(rest==1){
        R = x+y+(x%y)
        }else if(rest == 2){
            if(x%2 == x){console.log('É par')}else{console.log('É ímpar')}
            if(y%2 == y){console.log('É par')}else{console.log('É ímpar')}
        }else if(rest == 3){
            R = (x+y)*x
        }else if(rest == 4){
            R = (x + y)/2 }else{ 
                console.log(`${x**2} ${y**2}`)}
    }
}
main()

