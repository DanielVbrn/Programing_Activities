interface Area {
    calcularArea():number
}

interface AreaExterna {
    calcularAreaExterna():number
}

interface AreaInterna {
    calcularAreaInterna():number
}


class Moradia implements Area{
    comprimento:number
    largura:number
    
    
    public endereco:Endereco;
    constructor() {
        
    }

    public calcularArea(): number {
        return this.comprimento * this.largura;
    }

}


class Casa extends Moradia{
    public parede:Parede[];
    public telhado:Telhado;
    public espelho:Espelho

    constructor() {
        super()
    }

    public TelhadoAreaExterna():number{
        return this.telhado.calcularAreaExterna()
    }

    public TelhadoAreaInterna():number{
        return this.telhado.calcularAreaInterna()
    }

}

class Parede implements Area{
    comprimento:number
    largura:number
    tipoP:TipoParede
    constructor() {
        
    }

    calcularArea(): number {
        return this.comprimento * this.largura;
    }

}


class Telhado implements AreaExterna,AreaInterna {
    public comprimentoExterno:number
    public larguraExterna:number
    public comprimentoInterno:number
    public larguraInterna:number
    public tipoT:TipoTelhado

    constructor(parameters) {
        
    }

    public calcularAreaExterna(): number {
        return this.comprimentoExterno * this.larguraExterna;
    }

    public calcularAreaInterna(): number {
        return this.comprimentoInterno * this.larguraInterna;
    }
}


class Endereco {
    public bairro:string
    public logradouro:string
    public rua:string
    constructor(bairro:string, logradouro:string,rua:string) {
        this.bairro = bairro
        this.logradouro = logradouro
        this.rua = rua
    }

    public getEndereco() {
        return `
            Bairro:${this.bairro}
            Logradouro:${this.logradouro}
            rua:${this.rua}

            `
    }
}

class Espelho {
    constructor() {
        
    }
}

enum TipoParede {
    ParedeQuarto,
    ParedeBanheiro,
    ParedeCozinha
}

enum TipoTelhado {
    TelhadoAreaExterna,
    TelhadoAreaInterna
}

enum TipoVidro {
    Fume,
    Opaco,
    Transparente
}