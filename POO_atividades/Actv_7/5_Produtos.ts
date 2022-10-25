export class Produto{
    private identificador: string;
    private nomeP:string;
    private descrição: string;
    private qtd_produtos: number;
    private valor_unitário: number;

    constructor (identificador: string,nomeP:string, descrição: string, qtd_produtos: number, valor_unitário: number) {
        this.identificador = identificador;
        this.nomeP = nomeP;
        this.descrição = descrição;
        this.qtd_produtos = qtd_produtos;
        this.valor_unitário = valor_unitário;
    }

    repor(quantidade:number){
        this.qtd_produtos = this.qtd_produtos + quantidade;
    }

    darBaixa(quantidade:number){
        this.qtd_produtos = this.qtd_produtos - quantidade;
    }
    get IdProduto(){
        return this.identificador;
    }
    get NomeProduto(){
        return this.identificador;
    }
    get descricao(){
        return this.descrição;
    }
    get ValorUnitario(){
        return this.valor_unitário;
    }

}

export class ProdutoPerecivel extends Produto{
    private dataValidade: Date;
    constructor (identificador: string,nomeP:string, descrição: string, qtd_produtos: number, valor_unitário: number,dataValidade: Date) {
        super(identificador, nomeP, descrição, qtd_produtos, valor_unitário)
        this.dataValidade = dataValidade;
    }
    repor(quantidade:number):void{
        if (this.produtoValido() == true) {
            super.repor(quantidade);
        }
    }
    darBaixa(quantidade:number){
        if(this.produtoValido() == true){
            super.darBaixa(quantidade);
        }
    }
    
    produtoValido():boolean{
        if(Date.now() >= this.dataValidade.getDate()){
            return true;
        }else{
            return false;
        }
    }



}


export class Estoque{
    produtos:Array<Produto> = [];

    constructor (produtos:Array<Produto> = []) {
        this.produtos=produtos;
    }
    consultarId(id:string):number{
        let count: number = 0;    
        for (let i:number = 1; i <= this.produtos.length; i++) {
            if(this.produtos[i].IdProduto == id){
                count = i;
                break;
            } 
        }
        return count;

    }
    consultarNome(nome:string):number{
        let count: number = 0;    
        for (let i:number = 1; i <= this.produtos.length; i++) {
            if(this.produtos[i].NomeProduto == nome){
                count = i;
                break;
            } 
        }
        return count;

    }

    inserir(produtos:Produto):void{
        if(this.consultarId(produtos.IdProduto) == 0){
            this.produtos.push(produtos);
        }
    }
    
    excluir(id:string){
        let indice: number = this.consultarId(id);

        this.produtos.splice(indice, 1);
    }

    repor(id:string, quantidade:number):void{
        let indice:number = this.consultarId(id);
        if(indice != -1){
            this.produtos.at(indice)?.repor(quantidade)
        }else{
            console.log("Produto já ultrapassou o prazo de validade")
        }
        
    }

    darBaixa(id:string,quantidade:number):void{
        let indice:number = this.consultarId(id);

        if(indice != -1){
            this.produtos.at(indice)?.repor(quantidade)
        }else{
            console.log("Produto já ultrapassou o prazo de validade")
        }    
    }

    validarProdutosVencidos(): Array<Produto>{
        let ProdutoVencido:Array<Produto> = [];
        this.produtos.forEach((produto) => {
            if (produto instanceof ProdutoPerecivel){
                if((<ProdutoPerecivel>produto).produtoValido()){
                    produto.toString();
                    ProdutoVencido.push(produto)
                }        
            }
        })
        return ProdutoVencido;
    }

    mostrarProdutos():void{
        this.produtos.forEach((produto) => produto.toString());
    }
}



