import { Pokemon } from "./decorators/pokemon-class";

const Charmander = new Pokemon('Charmander');

// can't do it
// (Pokemon.prototype as any).customName = 'Camilo';

// Charmander.savePokemonToDB(5);
console.log(Charmander);