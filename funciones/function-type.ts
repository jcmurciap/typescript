(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`; 

    let myFunction
    
    myFunction = 10;
    console.log(myFunction);
    //let myFunction: Function; -> not allowed here

    myFunction = addNumbers;
    console.log(myFunction(1,2));
    //let myFunction: (x: number, y:number) => number; --Solo funciona aca.

    myFunction = greet;
    console.log(myFunction('camilo'));
    //let myFunction: (x: string) => string; --Solo funciona aca.

    myFunction = saveTheWorld;
    console.log(myFunction());
    //let myFunction: () => string; --Solo funciona aca 

    console.log(addNumbers(100, 100));
})();