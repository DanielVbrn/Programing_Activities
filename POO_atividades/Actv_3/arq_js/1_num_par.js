"use strict";
class num_Par {
    constructor(num) {
        this.num = 5;
        this.num = num;
    }
    num_par() {
        if (this.num % 2 == 0) {
            return true;
        }
        else if (this.num % 2 == 1) {
            return false;
        }
    }
}
function showPar() {
    let verification = new num_Par(6);
    let par = verification.num_par();
    console.log(`${par}`);
}
showPar();
