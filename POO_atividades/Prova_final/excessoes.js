"use strict";
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
exports.__esModule = true;
exports.EmpateObitido = exports.VitoriaObtida = void 0;
var VitoriaObtida = /** @class */ (function (_super) {
    __extends(VitoriaObtida, _super);
    function VitoriaObtida(message) {
        return _super.call(this, message) || this;
    }
    return VitoriaObtida;
}(Error));
exports.VitoriaObtida = VitoriaObtida;
var EmpateObitido = /** @class */ (function (_super) {
    __extends(EmpateObitido, _super);
    function EmpateObitido(message) {
        return _super.call(this, message) || this;
    }
    return EmpateObitido;
}(Error));
exports.EmpateObitido = EmpateObitido;
