(() => {
    interface Hero {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    };
    
    let flash:Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    
    let superman:Hero = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
    // la principal diferencia entre un tipo y una interfas es:
    // un tipo no se pueden agregar nuevas propiedades
    // una interfaz si lo permite(es ampliable)


})()