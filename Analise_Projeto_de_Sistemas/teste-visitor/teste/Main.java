package teste;

public class Main {
    public static void main(String[] args) {
        // Criar instâncias de formas
        Circulo circulo = new Circulo();
        circulo.raio = 5.0;

        Quadrado quadrado = new Quadrado();
        quadrado.lado = 4.0;

        Triangulo triangulo = new Triangulo();
        triangulo.base = 3.0;
        triangulo.altura = 6.0;

        // Criar um Visitor
        AreaVisitor areaVisitor = new AreaVisitor();

        // Testar o Visitor com cada forma
        circulo.accept(areaVisitor);    // Saída esperada: "oi"
        quadrado.accept(areaVisitor);   // Saída esperada: "ei"
        triangulo.accept(areaVisitor);  // Saída esperada: "ui"
    }
}
