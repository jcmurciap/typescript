"use strict";
var msg = "Hello world";
console.log(msg);
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || '')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '');
        }
    };
    var name = fullName('Camilo', 'Murcia', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '');
    };
    var name = fullName('Camilo');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Camilo', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return firstName + " " + args.join(' ');
    };
    var superman = fullName('juan', 'camilo');
    console.log({ superman: superman });
})();
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
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('camilo'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    console.log(addNumbers(100, 100));
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof returnName);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Camilo',
        age: 28,
        powers: ['Hacerce el webon'],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    var superman = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super velocidad'],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariables = 'Juan';
    console.log(typeof myCustomVariables);
    myCustomVariables: 1;
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: 'Bruce',
        age: 43,
        powers: ['Force'],
    };
    console.log(typeof myCustomVariables);
    console.log(myCustomVariables);
})();
//# sourceMappingURL=main.js.map