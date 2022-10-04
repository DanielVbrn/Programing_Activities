class Hotel {
    quantReservas : number = 0;
    constructor(quantReservas:number){
        this.quantReservas = quantReservas;
    }
    adicionarReserva(): void {
        this.quantReservas++;
    }
}

function reservasHotel(){
    let receiveQtd:Hotel = new Hotel(23);
    console.log(receiveQtd.quantReservas);
}