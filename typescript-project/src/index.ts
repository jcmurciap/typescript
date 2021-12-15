import { getPokemon } from './generics/get-pokemon';

getPokemon(44)
    .then(pokemon => console.log(pokemon.sprites.front_default)) // you can access to a numerical methods -> ex:resp.toFixed()
    .catch(error => console.error(error))
    .finally(() => console.log('end getPokemon request'));


