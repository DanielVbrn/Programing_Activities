var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cliente = /** @class */ (function () {
    function Cliente(nome, cod_cliente, data_nascimento) {
        this.nome = nome;
        this.cod_cliente = cod_cliente;
        this.data_nascimento = data_nascimento;
        if (cod_cliente == "") {
            throw new VerificarCod("Campo obrigatório");
        }
    }
    Object.defineProperty(Cliente.prototype, "name", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "codCliente", {
        get: function () {
            return this.cod_cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "dataNascimento", {
        get: function () {
            return this.data_nascimento;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
var VerificarCod = /** @class */ (function (_super) {
    __extends(VerificarCod, _super);
    function VerificarCod(message) {
        return _super.call(this, message) || this;
    }
    return VerificarCod;
}(Error));
var CadastrarCliente = /** @class */ (function () {
    function CadastrarCliente() {
        this.clientes = [];
    }
    CadastrarCliente.prototype.cadastro = function (newCliente) {
        if (newCliente instanceof Cliente) {
            this.clientes.push(newCliente);
        }
    };
    return CadastrarCliente;
}());
try {
    var a = new Cliente("Daniel", "004", '2003-09-09');
    var b = new Cliente("Marcos", "005", '2004-07-09');
    var registrar = new CadastrarCliente();
    registrar.cadastro(a);
    registrar.cadastro(b);
    console.table(registrar.clientes);
}
catch (a) {
    throw new VerificarCod("Erro detectado no cadastro.");
}
