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

// factory decorator
const CheckValidPokemonId = () => 
    (target: any, propertyKey: string, descriptor: PropertyDescriptor ):void => {
        const originalMethod = descriptor.value;
        
        descriptor.value = ( id: number ) => {
            if(id < 1 || id > 800){
                return console.error('Pokemon Id does not exist')
            } else {
                return originalMethod(id)
            };
        };
};

const readOnly = (isWritable: boolean = true):Function => 
    (target:any, propertyKey: string) => {
        const descriptor:PropertyDescriptor = {
            get(){
                return 'Camilo'
            },
            set(val){
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }
    return descriptor;
}

// decorators are executed sequentially
@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
    
    // para que pueda funcionar, es necesario cambiar las funcines flecha
    // por las funciones convencionales.
    @readOnly(false)
    public publicApi: string = "https://pokeapi.co";
    
    constructor (
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon saved on database ${id}`)
    }
}
