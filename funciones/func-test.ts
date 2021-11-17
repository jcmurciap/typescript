const sumar = (a: number, b: number):number => a + b;

let contar = (heroes: string[]): number => heroes.length;
// console.log(contar('camilo')); // 6

//PENDING
const superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna verde'];
console.log(contar(superHeroes));

// parametros por defecto
const llamarBatman = (llamar: boolean): void => {
    if (llamar) {
        console.log('Batiseñal activada');
    };
};
llamarBatman(false);

// rest?
const unirHeroes = (...personas:string[]): string => {
    return personas.join(', ');
}

// tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]) => {};

// crear el tipo de funcion que acepte la funcion 'noHaceNada';
let noHaceNadaTampoco: (n:number, s:string, b:boolean, arr:string[]) => void;
noHaceNadaTampoco = noHaceNada;
