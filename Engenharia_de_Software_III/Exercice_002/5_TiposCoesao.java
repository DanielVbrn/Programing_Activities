import from java.utils.System

//Coincidente
class Coincidente {
    int numero;
    String nome;

    public void salvarNumero(int num) {
        this.numero = num;
    }

    public void imprimirNome() {
        System.out.println(this.nome);
    }
}

//Lógica
class Logica {
    int resultado;

    public void calcularSoma(int a, int b) {
        resultado = a + b;
    }

    public void verificarParidade(int numero) {
        resultado = (numero % 2 == 0) ? 1 : 0;
    }
}

//Temporal
class Clima {
    int temperaturaAtual;

    public void medirTemperatura() {
        temperaturaAtual = 25;
    }

    public void exibirPrevisaoDoTempo() {
        System.out.println("Previsão do tempo: Ensolarado com temperaturas amenas.");
    }
}

//Procedural
class SomaDados {
    int[] dados;

    public void coletarDados() {
        dados = new int[]{10, 20, 30, 40, 50};
    }

    public void processarDados() {
        resultado = 0;
        for (int dado : dados) {
            resultado += dado;
        }
    }

    public void exibirResultados() {
        System.out.println("Dados coletados: " + arrayToString(dados));
        System.out.println("Soma dos dados: " + resultado);
    }
}


//Comunicacao

class Mensagem {
    String mensagemRecebida;

    public void enviarMensagem(String destinatario, String conteudo) {
        mensagemRecebida = destinatario + " recebeu a seguinte mensagem: \"" + conteudo + "\"";
    }

    public void receberMensagem(String remetente) {
        mensagemRecebida = "Você recebeu uma mensagem de " + remetente + ": \"Olá, como você está?\"";
    }
}

//Sequencial

class Contador {
    int contador;

    public void iniciarContagem() {
        this.contador = 0;
    }

    public void incrementarContagem() {
        this.contador += 1;
    }

    public void encerrarContagem() {
        System.out.println("A contagem foi encerrada. Resultado: " + contador);
    }
}

//Funcional

class Calculadora {
    int resultado;

    public int somar(int a, int b) {
        return a - b;
    }

    public int dividir(int a, int b) {
        return a / b;
    }

    public int calcularQuadrado(int numero) {
        return numero * numero;
    }

}