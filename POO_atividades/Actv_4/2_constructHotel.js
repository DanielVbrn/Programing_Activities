"use strict";
class Hotel {
    constructor(quantReservas) {
        this.quantReservas = 0;
        this.quantReservas = quantReservas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
function reservasHotel() {
    let receiveQtd = new Hotel(23);
    console.log(receiveQtd.quantReservas);
}
