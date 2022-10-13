class Hora{
    private hora:number;
    private minutos:number;
    private segundos:number;

    constructor( /* hora:number,minutos:number, segundos:number */){
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
    }

    public hour(horas:number):void{
        this.hora = horas;  
    }
    public minute(minutos:number):void{
        this.minutos = minutos;  
    }
    public second(segundos:number):void{
        this.segundos = segundos;  
    }

    public returnHorario(){
        return `${this.hora}:${this.minutos}:${this.segundos}`
    }
}

function lerHora(){
    let read  = new Hora();
    read.hour(22)
    read.minute(45)
    read.second(26)
    console.log(read.returnHorario())
}lerHora()