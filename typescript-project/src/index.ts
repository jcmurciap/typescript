import { getPokemon } from './generics/get-pokemon';

getPokemon(299)
    .then(resp => console.log(resp))
    .catch(error => console.error(error))
    .finally(() => console.log('end getPokemon request'));

