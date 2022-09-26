"use strict";
class num_Primo {
    constructor(num) {
        this.num = 0;
        this.num = num;
    }
    primo() {
        for (let i = 2; i < this.num; i++) {
            if (this.num % i == 0) {
                return false;
            }
            else if (this.num % 2 != 0) {
                return true;
            }
        }
    }
}
function showPrimo() {
    let p = new num_Primo(7);
    let verificar = p.primo();
    console.log(`${verificar}`);
}
showPrimo();
