// classe base
class Veiculo{
    placa: string;
    ano: number;
    constructor (placa: string, ano: number) {
        this.placa = placa;
        this.ano = ano;
    }
}


// classe derivada
// define as características que a tornam única
class Carro extends Veiculo{
    modelo:String;
    constructor (placa:string, ano:number, modelo:String) {
        super(placa, ano);
        this.placa = placa;
        this.ano = ano;
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro{
    autonomiaBateria: number;
    constructor (placa:string, ano:number, modelo:String, autonomiaBaateria:number) {
        super(placa, ano,modelo);
        this.placa = placa;
        this.ano = ano;
        this.modelo = modelo;
        this.autonomiaBateria = autonomiaBaateria;
    }

}


class ModeloCarroEletrico extends CarroEletrico{
    carrosEletricos: CarroEletrico[] = [
       /*  {autonomiaBateria:14, modelo:"importado",placa:"0E34", ano:2003}
  */   ];
    constructor (placa:string, ano:number, modelo:String, autonomiaBaateria:number) {
        super(placa, ano,modelo, autonomiaBaateria);
        this.placa = placa;
        this.ano = ano;
        this.modelo = modelo;
        this.autonomiaBateria = autonomiaBaateria;

    }

    returnCarros(codCAR:String){
        if(codCAR == this.modelo){
            return this.modelo;
        }else{
            return "Modelo não encontrado..."
        }
    }
}


let verificarCarros = () => {
    let carros = new CarroEletrico("04ER", 2003, "Lamborgini", 300);
    console.log(carros.modelo);
    
}