//10. O encapsulamento também mitiga o acoplamento alto? Discuta o exemplo da
//página 7 do artigo Coesão e Acoplamento em Sistemas Orientados a Objetos.

//R: Sim, pois irá se utilizar de métodos de acesso que permitem com que os atributos de uma classe não seja acessado
//diretamente além de incentivar a criação de interfaces bem definidas, isso fazendo com que o código seja mais
//modular. No exemplo da página 7, temos três classes: Controle, Veiculo, e Motor. O objetivo é controlar o motor de um
//veículo a partir do Controle. A primeira implementação do código não utiliza encapsulamento.


//Usando encapsulamento:
class Controle {
    Veiculo veiculo;

    public Controle(Veiculo veiculo) {
        this.veiculo = veiculo;
    }

    public void acelerar() {
        veiculo.acelerar();
    }

    public void frear() {
        veiculo.frear();
    }
}

class Veiculo {
    private Motor motor;

    public Veiculo() {
        motor = new Motor();
    }

    public void acelerar() {
        motor.aumentarPotencia();
    }

    public void frear() {
        motor.diminuirPotencia();
    }
}

class Motor {
    private int potencia;

    public void aumentarPotencia() {
        potencia += 10;
    }

    public void diminuirPotencia() {
        potencia -= 10;
    }
}
