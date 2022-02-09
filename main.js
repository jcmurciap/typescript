var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("decorators/pokemon-class", ["require", "exports"], function (require, exports) {
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
    let Pokemon = class Pokemon {
        constructor(name) {
            this.name = name;
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
define("index", ["require", "exports", "decorators/pokemon-class"], function (require, exports, pokemon_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Charmander = new pokemon_class_1.Pokemon('Charmander');
    console.log(Charmander);
});
define("generics/generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunctionArrow = exports.genericFunction = exports.printObject = void 0;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
    ;
    const genericFunctionArrow = (argument) => argument;
    exports.genericFunctionArrow = genericFunctionArrow;
});
define("backs/genericos", ["require", "exports", "generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).dangerLevel);
});
define("data/powers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.powers = void 0;
    exports.powers = [
        {
            id: 1,
            desc: 'Money',
        },
        {
            id: 2,
            desc: 'Drugs',
        }
    ];
});
define("classes/Hero", ["require", "exports", "data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.powers.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'not found';
        }
    }
    exports.Hero = Hero;
    ;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    ;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    ;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
    ;
});
define("interfaces/pokemon", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("generics/get-pokemon", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemon = void 0;
    axios_1 = __importDefault(axios_1);
    const getPokemon = (pokemonId) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return data;
    });
    exports.getPokemon = getPokemon;
});
define("interfaces/hero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/villain", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=main.js.map