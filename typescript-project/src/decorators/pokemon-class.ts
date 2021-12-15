function printToConsole(constructor: Function){
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if(print){

        return printToConsole; 
    }else {
        return () => {}
    }
}

const blockPrototype = function( constructor: Function ) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// decorators are executed sequentially
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = "https://pokeapi.co";
    constructor (
        public name: string,
    ){}
}



