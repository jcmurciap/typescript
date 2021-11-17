(() => {
    let flash:{name:string, age:number, powers:string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    }

    flash = {
        name: 'Camilo',
        age: 28,
        powers: ['Hacerce el webon'],
        // Como agregamos un metodo al objeto inicial
        getName(){
            return this.name;
        },
    };
    console.log(flash);
})();
