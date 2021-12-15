define(["require", "exports", "./decorators/pokemon-class"], function (require, exports, pokemon_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Charmander = new pokemon_class_1.Pokemon('Charmander');
    // can't do it
    // (Pokemon.prototype as any).customName = 'Camilo';
    Charmander.savePokemonToDB(5);
});
