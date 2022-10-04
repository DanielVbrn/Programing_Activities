var Equipamento = /** @class */ (function () {
    function Equipamento(ligado) {
        if (ligado === void 0) { ligado = false; }
        this.ligado = ligado;
    }
    Equipamento.prototype.liga = function () {
        this.ligado = true;
    };
    Equipamento.prototype.desliga = function () {
        this.ligado = false;
    };
    Equipamento.prototype.inverte = function () {
        this.ligado = !this.ligado;
    };
    Equipamento.prototype.equip_Ligado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
function equipamento() {
    var a = new Equipamento();
    console.log(a.equip_Ligado());
    a.liga();
    console.log(a.equip_Ligado());
    a.desliga();
    console.log(a.equip_Ligado());
    a.inverte();
    console.log(a.equip_Ligado());
}
equipamento();
