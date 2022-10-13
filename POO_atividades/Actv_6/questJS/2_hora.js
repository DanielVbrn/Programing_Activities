"use strict";
class Hora {
    constructor( /* hora:number,minutos:number, segundos:number */) {
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
    }
    hour(horas) {
        this.hora = horas;
    }
    minute(minutos) {
        this.minutos = minutos;
    }
    second(segundos) {
        this.segundos = segundos;
    }
    returnHorario() {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}
function lerHora() {
    let read = new Hora();
    read.hour(22);
    read.minute(45);
    read.second(26);
    console.log(read.returnHorario());
}
lerHora();
