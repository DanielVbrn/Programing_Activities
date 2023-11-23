package teste;
// Padrão Visitor
interface Visitor {
    public void visitCirculo(Circulo circulo);
    public void visitQuadrado(Quadrado quadrado);
    public void visitTriangulo(Triangulo triangulo);
    public void visitRetangulo(Retangulo retangulo);
}

interface Forma {
    public void accept(Visitor visitor);
}

class Circulo implements Forma {
    double raio;

    @Override
    public void accept(Visitor visitor) {
        visitor.visitCirculo(this);
    }
}

class Quadrado implements Forma {
    double lado;

    @Override
    public void accept(Visitor visitor) {
        visitor.visitQuadrado(this);
    }
}

class Triangulo implements Forma {
    double base;
    double altura;

    @Override
    public void accept(Visitor visitor) {
        visitor.visitTriangulo(this);
    }
}

class Retangulo implements Forma {
    double base;
    double altura;

    public void accept(Visitor visitor) {
        visitor.visitRetangulo(this);
    }
}

class AreaVisitor implements Visitor {
    @Override
    public void visitCirculo(Circulo circulo) {
        System.out.println("oi");
    }

    @Override
    public void visitQuadrado(Quadrado quadrado) {
        System.out.println("ei");
    }

    @Override
    public void visitTriangulo(Triangulo triangulo) {
        System.out.println("ui");
    }

    public void visitRetangulo(Retangulo retangulo) {
        System.out.println("ui");
    }

}

