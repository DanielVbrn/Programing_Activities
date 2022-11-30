class Cliente{
    private nome:string;
    private cod_cliente:string;
    private data_nascimento:string;
    constructor(nome:string, cod_cliente:string, data_nascimento:string){
        this.nome = nome;
        this.cod_cliente = cod_cliente;
        this.data_nascimento = data_nascimento;
        if(cod_cliente == ""){
            throw new VerificarCod("Campo obrigatório");
        }
    }

    public get name(){
        return this.nome;
    }

    public get codCliente(){
        return this.cod_cliente;
    }

    public get dataNascimento(){
        return this.data_nascimento;
    }
    

}

interface Cadastro{
    cadastro(newCliente:Cliente):void;

}


class VerificarCod extends Error{
    constructor(message:string){
        super(message);
    }
}   

class CadastrarCliente implements Cadastro{
    clientes:Cliente[] = [];
    cadastro(newCliente:Cliente):void{
        if(newCliente instanceof Cliente){
            this.clientes.push(newCliente);
        }
    }
}

try {
    let a:Cliente = new Cliente("Daniel", "004", '2003-09-09');
    let b:Cliente = new Cliente("Marcos", "005", '2004-07-09');
    let registrar:CadastrarCliente = new CadastrarCliente();
    registrar.cadastro(a);
    registrar.cadastro(b);
    console.table(registrar.clientes);
    
} catch (a:any) {
   throw new VerificarCod("Erro detectado no cadastro.");
}