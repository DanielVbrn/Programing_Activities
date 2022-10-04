var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo < valor) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferencia = function (contaDestinada, valor) {
        if (this.sacar(valor) == false) {
            contaDestinada.depositar(valor);
        }
        else {
            return false;
        }
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
console.log(c1.sacar(50));
console.log(c1.depositar(50));
var c2 = new Conta("2", 100);
console.log(c1.transferencia(c2, 35));
