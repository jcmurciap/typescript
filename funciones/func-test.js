"use strict";
var sumar = function (a, b) { return a + b; };
var contar = function (heroes) { return heroes.length; };
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna verde'];
console.log(contar(superHeroes));
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log('Batiseñal activada');
    }
    ;
};
llamarBatman(false);
var unirHeroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(', ');
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=func-test.js.map