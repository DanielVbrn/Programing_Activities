// import prompt from "prompt-sync"
const input = require('prompt-sync')({sigint: true});
// const input = prompt()
import { Conta } from "../Actv_6/4_privateConta";
import { Banco } from "../Actv_6/3_privateBanco";
import {Poupanca} from "./4_renderJuros"

    let banco: Banco = new Banco();
    let opcao: String = '';
    do {
    let menu = '\nBem vindo\nInsira uma opção: \n';
        menu +='1 - Cadastrar 2 - Consultar 3 - Sacar' ;
        menu +='4 - Depositar 5 - Excluir 6 - Transferir' ;
        menu += '7 – Totalizações 8 - RenderJuros 0 - Sair' ;
        menu +="\n\n\n\n" 
        console.log(menu)

    opcao = input("Opção: ");
    switch (opcao) {
        case "1":
            cadastrar()
            break
        case "2":

            consultar();
            break
        case "3":
            sacar();
            break
        case "4":
            depositar();
            break
        case "5":
            excluir();
            break
        case "6":
            transferir();
            break
        case "7":
            total();
            break
        case "8":
            RenderJuros();
            break

    }
        input("Operação finalizada. Insira <enter>");
    } while (opcao != "0");
    console.log("Aplicação encerrada");

    function cadastrar(): void {
        console.log("\nCadastrar conta\n");
        let numero: string = input('Insira o número da conta:');
        let saldo: number = input('Insira seu saldo:');
        let nomeTitular: string = input('Insira o nome do Titular:');
        let conta: Conta ;
        conta = new Conta(numero, nomeTitular,saldo);
        
        banco.inserir(conta);
    }


    function consultar(): void {
        console.log("\nConsultar conta\n");
        let numero: Conta = input('Insira o número da conta: ');
        let conta: string = banco.consultSaldo;
    
        if(conta != undefined) {
            console.log(`\nNome do titular: ${conta}, numero: ${numero.verificarNumero}\n`);
        } 
    }
    function sacar():void  {
        console.log("\nSaque\n");
        
        let numero: string = input('Insira o número da conta: ');
        let valor: number = Number(input(`Valor: `));
        banco.sacar(numero,valor);
    }

    function depositar(): void {
        console.log("\nDepósito\n");
        let numero: string = input('Insira o número da conta: ');
        let valor: number = Number(input(`Valor: `));
        banco.depositar(numero,valor);
    }

    function transferir(): void {
        console.log("\nTransferência\n");
        let numeroCredito: string = input('Insira o número da conta : ');
        let numeroDebito: string = input('Insira o número da conta : ');
        let valor: number = input(`Valor: `);
        banco.transferir(numeroCredito, numeroDebito, valor);
    }

    function excluir(): void {
        console.log("\nExcluir conta\n");
        let numero: string = input('Insira o número da conta: ');
        
        let excluir: string = input('Confirmar dígito (Sim/Nao): ');
        
        if( excluir.toLocaleUpperCase() == 'Sim') {
            banco.excluir(numero);
            console.log("conta excluída")
        } else if(excluir.toLocaleUpperCase() == 'Nao') {
            console.log("conta mantida")
        }
    }

    function total(): void {
        console.log("\nTotalizações do banco\n");
        let QtdContas: number = banco.qtdContas();
        let depositoTotal: number = banco.depositoTotal();
        let mediaSaldo: number = banco.MediaSaldo();
        
        console.log(`Total de contas: ${QtdContas} `)
        console.log(`Deposito total: ${depositoTotal} `)
        console.log(`Média de saldo por conta: ${mediaSaldo} \n`)
    }

    function RenderJuros():void{
        let c1:Poupanca;
        
        c1= new Poupanca(10,"12", 1000, "Daniel");
        banco.inserir(c1);
        banco.renderJuros("12");
        console.log("\nRender juros da conta\n")
        console.log(c1.consultarSaldo());

    }RenderJuros()


    