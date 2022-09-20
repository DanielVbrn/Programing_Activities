class Professor{
    nome: string = "Ely";
    pagamento: number = 120.56;
    preferLanguage: string = "Typescript";
    constructor(){
        this.nome;
        this.pagamento;
        this.preferLanguage;
    }

    outputName(){
        console.log(`${this.nome}`)
    }
    outputPayment(){
        console.log(`My payment time is ${this.pagamento} `)
    }
    outputPreferLang(){
        console.log(`and \nmy preffered language is ${this.preferLanguage}`)
    }
}



function template(){
    let valor = new Professor()
    let nome = valor.outputName()
    let pagamento = valor.outputPayment()
    let preferLanguage = valor.outputPreferLang()
   
}template()


