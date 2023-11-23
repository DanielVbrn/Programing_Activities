interface IAreaForma {
    double calcularArea();
}

class RetanguloCorrigido implements IAreaForma {
    private double largura;
    private double altura;

    public RetanguloCorrigido(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }

    @Override
    public double calcularArea() {
        return altura * largura;
    }
}

class QuadradoCorrigido implements IAreaForma {
    private double lado;

    public QuadradoCorrigido(double lado) {
        this.lado = lado;
    }

    @Override
    public double calcularArea() {
        return lado * lado;
    }
}
