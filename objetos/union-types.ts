(() => {
    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustomVariables: (string|number|Hero) = 'Juan';
    console.log(typeof myCustomVariables);
    
    myCustomVariables: 1;
    console.log(typeof myCustomVariables);
    
    myCustomVariables = {
        name: 'Bruce',
        age: 43,
        powers: ['Force'],
    };
    console.log(typeof myCustomVariables);
    console.log(myCustomVariables);
})();