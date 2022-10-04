/*
A solução para o problema seria passar um parametro ao criar uma instancia para o objeto Radio; 
*/
class Radio{
    volume:number;
    constructor(volume:number){
        this.volume = volume;
    }
}
let r: Radio = new Radio(45);
console.log(r.volume )