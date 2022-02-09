define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // printObject(123);
    // printObject(new Date());
    // printObject({a:1, b:2, c:3});
    // printObject([1,2,3,4,5,6,7,8,9,10]);
    // printObject('Hello world');
    // como le podemos decir a typescript que me muestre los metodos que
    // correspondan con el tipo de dato que le ingresamos?
    // console.log(genericFunction(3.145678).toFixed(2));      
    // console.log(genericFunction('Hola mundo').toUpperCase());      
    // console.log(genericFunction(new Date()).getHours());      
    // console.log(genericFunctionArrow(15.645678).toFixed(2));      
    // console.log(genericFunctionArrow('JUAN CAMILO').toLowerCase());      
    // console.log(genericFunctionArrow(new Date(1)).getHours());      
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).dangerLevel);
});
