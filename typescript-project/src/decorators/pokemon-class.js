var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    function printToConsole(constructor) {
        console.log(constructor);
    }
    const printToConsoleConditional = (print = false) => {
        if (print) {
            return printToConsole;
        }
        else {
            return () => { };
        }
    };
    const blockPrototype = function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
    // factory decorator
    const CheckValidPokemonId = () => (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = (id) => {
            if (id < 1 || id > 800) {
                return console.error('Pokemon Id does not exist');
            }
            else {
                return originalMethod(id);
            }
            ;
        };
    };
    const readOnly = (isWritable = true) => (target, propertyKey) => {
        const descriptor = {
            get() {
                return 'Camilo';
            },
            set(val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                });
            }
        };
        return descriptor;
    };
    // decorators are executed sequentially
    let Pokemon = class Pokemon {
        constructor(name) {
            this.name = name;
            // para que pueda funcionar, es necesario cambiar las funcines flecha
            // por las funciones convencionales.
            this.publicApi = "https://pokeapi.co";
        }
        savePokemonToDB(id) {
            console.log(`Pokemon saved on database ${id}`);
        }
    };
    __decorate([
        readOnly(false)
    ], Pokemon.prototype, "publicApi", void 0);
    __decorate([
        CheckValidPokemonId()
    ], Pokemon.prototype, "savePokemonToDB", null);
    Pokemon = __decorate([
        blockPrototype,
        printToConsoleConditional(false)
    ], Pokemon);
    exports.Pokemon = Pokemon;
});
