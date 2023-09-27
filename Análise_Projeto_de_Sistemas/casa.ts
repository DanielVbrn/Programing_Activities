
interface Area {
    calcularArea():number
}

class Moradia implements Area{
    public largura:number
    public comprimento:number
    public enderecoMoradia:Endereco

    constructor(largura:number, comprimento:number, enderecoMoradia:Endereco) {
        this.largura = largura;
        this.comprimento = comprimento;
        this.enderecoMoradia = enderecoMoradia;
    }

    public calcularArea():number {
        return this.largura * this.comprimento;
    }

    public Endereco():Endereco {
        return this.enderecoMoradia;
    }
}


class Casa extends Moradia {
    public parede:Parede[]
    public telhado:Telhado[]
    public 

    constructor(largura:number, comprimento:number, enderecoMoradia:Endereco) {
        super(largura,comprimento,enderecoMoradia)
    }

    public TelhadoAreaExterna():Telhado {

    }
}

enum TipoTelhado {
    TelhadoAreaExterna,
    Telha
}

class Telhado {
    public qtd_telhas:number
    public parede:Parede;


    constructor(qtdTelhas:number) {
        this.qtd_telhas = qtdTelhas
    }
}


enum TipoParede {
    ParedeQuarto,

    ParedeBanheiro,

    ParedeCozinha
}

class Parede {
    tipoDeParede:TipoParede

    constructor(parameters) {
        
    }

    public Altura():number {

    }

    public Largura():number {
        
    }

    public Acabamento():number {
        
    }
}

class Espelho {

}

class Endereco {
    public endereco:string
    constructor(endereco:string) {
        this.endereco = endereco;
    }
}

