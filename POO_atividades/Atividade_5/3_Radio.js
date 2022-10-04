"use strict";
/*
A solução para o problema seria passar um parametro ao criar uma instancia para o objeto Radio;
*/
class Radio {
    constructor(volume) {
        this.volume = volume;
    }
}
let r = new Radio(45);
console.log(r.volume);
