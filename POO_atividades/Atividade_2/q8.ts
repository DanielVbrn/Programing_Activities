/* (8).Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos. */

class Circulo{
    raio: number = 8 ;
   
    calcularArea() {   
        return (3.14 * (this.raio ** 2)) 
    }
    
    calcularPerimetro():number{
        return 2 * 3.14 * this.raio
    }
    
}

function Circle(){
    let circulo = new Circulo()
    
    let areaCirculo:number = circulo.calcularArea()
    let perimero_circle:number = circulo.calcularPerimetro()

    console.log(areaCirculo)
    console.log(perimero_circle)

}
Circle()